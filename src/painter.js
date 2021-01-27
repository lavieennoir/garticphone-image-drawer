import ReactTestUtils from "react-dom/test-utils";
import reactTriggerChange from "./lib/react-trigger-change";
window.TESTMY = reactTriggerChange;

export default class Painter {
  COLOR_INPUT_SELECTOR = '.draw input[type="color"]';
  THICKNESS_SELECTOR = ".draw .options > div > div";
  PEN_TOOL_SELECTOR = ".draw .tool.pen";
  CANVAS_SELECTOR = ".draw .core";

  color = "#000000";

  setColor = (hexColor) => {
    const colorInput = document.querySelector(this.COLOR_INPUT_SELECTOR);

    if (!colorInput) {
      throw new Error("Color input not found");
    }

    colorInput.value = hexColor;
    this.color = hexColor;
    reactTriggerChange(colorInput);
    // Simulate.change(document.querySelector(".draw .colors"), {
    //   target: { value: hexColor },
    // });
    // ReactTestUtils.Simulate.click(colorInput);
    // ReactTestUtils.Simulate.input(colorInput, { target: { value: hexColor } });
    // ReactTestUtils.Simulate.change(colorInput, { target: { value: hexColor } });
    // ReactTestUtils.Simulate.keyDown(colorInput, {
    //   key: "Enter",
    //   keyCode: 13,
    //   which: 13,
    // });
  };

  selectPencilTool = () => {
    // Select thickness
    document.querySelector(this.THICKNESS_SELECTOR)?.click();
    // Select tool
    document.querySelector(this.PEN_TOOL_SELECTOR)?.click();
  };

  loadImageData = async (url, width, height) => {
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
  };

  drawPoint = (x, y) => {
    Simulate.click(this.canvas, { clientX: x, clientY: y });
  };

  drawImage = async (url) => {
    this.selectPencilTool();
    const { data, width } = await this.loadImageData(url);

    this.canvas = document.querySelector(this.CANVAS_SELECTOR);
    for (let i = 0; i < data.length; i += 4) {
      const r = data[i].toString(16).padStart(2, "0");
      const g = data[i + 1].toString(16).padStart(2, "0");
      const b = data[i + 2].toString(16).padStart(2, "0");

      // Skip Alpha for now
      // const a = data[i+3].toString(16).padStart(2,"0");

      const newColor = `#${r}${g}${b}`;

      if (this.color !== newColor) {
        this.setColor(newColor);
      }

      const pixelIdx = Math.floor(i / 4);
      const canvasX = pixelIdx % width;
      const canvasY = Math.floor(pixelIdx / width);
      this.drawPoint(canvasX, canvasY);
    }
    this.canvas = null;
  };
}
