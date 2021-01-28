import reactTriggerEvent from "./lib/react-trigger-change";
import { awaitNextTick } from "./utils/wait-utils";

export default class Painter {
  COLOR_INPUT_SELECTOR = '.draw input[type="color"]';
  THICKNESS_SELECTOR = ".draw .options > div > div";
  PEN_TOOL_SELECTOR = ".draw .tool.pen";
  CANVAS_SELECTOR = ".draw .core canvas:last-child";

  color = "#000000";
  isLoading = false;
  stopRequested = false;

  setColor = (hexColor) => {
    const colorInput = document.querySelector(this.COLOR_INPUT_SELECTOR);

    if (!colorInput) {
      throw new Error("Color input not found");
    }

    colorInput.value = hexColor;
    this.color = hexColor;

    reactTriggerEvent(colorInput, "change");
  };

  selectPencilTool = () => {
    // Select thickness
    document.querySelector(this.THICKNESS_SELECTOR)?.click();
    // Select tool
    document.querySelector(this.PEN_TOOL_SELECTOR)?.click();
  };

  loadImageData = async (url, width, height) => {
    try {
      const res = await fetch(url);
      const imageBlob = await res.blob();

      // Using optional size for image
      const image = new Image(width, height);

      await new Promise((resolve) => {
        image.onload = resolve;

        // Create a local URL for that image and print it
        const newImgBlob = URL.createObjectURL(imageBlob);
        image.src = newImgBlob;

        if (this.imgBlob) {
          URL.revokeObjectURL(this.imgBlob);
          this.imgBlob = newImgBlob;
        }
      });

      const canvas = document.createElement("canvas", {
        width: image.naturalWidth,
        height: image.naturalHeight,
      });

      const ctx = canvas.getContext("2d");
      ctx.drawImage(image, 0, 0);
      const imageData = ctx.getImageData(
        0,
        0,
        image.naturalWidth,
        image.naturalHeight
      );

      return imageData;
    } catch (e) {
      throw e;
    }
  };

  drawPoint = async (x, y, globalX, globalY, i) => {
    const options = {
      clientX: globalX,
      clientY: globalY,
      movementX: 0,
      movementY: 0,
      offsetX: x,
      offsetY: y,
      pageX: globalX,
      pageY: globalY,
      screenX: globalX,
      screenY: globalY + 3,
      x: globalX,
      y: globalY,
      view: window,
    };

    reactTriggerEvent(this.canvas, "mousedown", options);
    await awaitNextTick(i);
    reactTriggerEvent(this.canvas, "mouseup", options);
    await awaitNextTick(i);
  };

  drawImage = async (url) => {
    try {
      this.isInProgress = true;

      this.selectPencilTool();
      const { data, width } = await this.loadImageData(url);

      this.canvas = document.querySelector(this.CANVAS_SELECTOR);
      const { top, left } = this.canvas.getBoundingClientRect();

      for (let i = 0; i < data.length; i += 4) {
        if (this.stopRequested) {
          break;
        }

        const r = data[i].toString(16).padStart(2, "0");
        const g = data[i + 1].toString(16).padStart(2, "0");
        const b = data[i + 2].toString(16).padStart(2, "0");

        // Skip Alpha for now
        // const a = data[i+3].toString(16).padStart(2,"0");

        const newColor = `#${r}${g}${b}`;

        if (this.color !== newColor) {
          this.setColor(newColor);
          await awaitNextTick(i);
        }

        const pixelIdx = Math.floor(i / 4);
        const canvasX = pixelIdx % width;
        const canvasY = Math.floor(pixelIdx / width);
        await this.drawPoint(
          canvasX,
          canvasY,
          left + canvasX + 3,
          top + canvasY,
          i
        );
      }
    } catch (e) {
      throw e;
    } finally {
      this.canvas = null;
      this.isInProgress = false;
      this.stopRequested = false;
    }
  };

  requestStop = () => {
    if (this.isInProgress) {
      this.stopRequested = true;
    }
  };
}
