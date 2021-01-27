export default class PainterView {
  constructor(painter) {
    this.painter = painter;

    this.initInputElement();
    this.initButtonElement();
    this.initRootElement();
  }

  getInputValue = () => {
    return this.input.value;
  };

  setButtonText = (text) => {
    this.button.innerText = text;
  };

  onClick = async () => {
    const url = this.getInputValue();

    if (this.painter.isInProgress) {
      this.painter.requestStop();
      return;
    }

    if (!url) {
      return;
    }

    try {
      this.setButtonText("Stop");
      await this.painter.drawImage(url);
    } catch (e) {
      console.trace(e);
      alert("Sorry an error occured while processing the image.");
    } finally {
      this.setButtonText("Draw!");
    }
  };

  initInputElement = () => {
    this.input = document.createElement("input");
    this.input.placeholder = "Image URL";
    this.input.style = "min-width: 200px;";
  };

  initButtonElement = () => {
    this.button = document.createElement("button");
    this.button.innerText = "Draw!";
    this.button.style = "margin-left: 1rem";
    this.button.addEventListener("click", this.onClick, { passive: true });
  };

  initRootElement = () => {
    this.root = document.createElement("div");
    this.root.append(this.input);
    this.root.append(this.button);
    this.root.style = "display: flex;position: absolute;top: 1rem;right: 1rem";
  };

  dispose = () => {
    this.button.removeEventListener("click", this.onClick);
  };
}
