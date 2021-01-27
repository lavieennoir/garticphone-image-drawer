export default class UIInjector {
  CONTAINER_SELECTOR = "#content";

  constructor(view) {
    this.view = view;
  }

  inject = () => {
    const container = document.querySelector(this.CONTAINER_SELECTOR);
    container.prepend(this.view.root);
  };
}
