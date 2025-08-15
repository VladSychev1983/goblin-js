import "./hammer.css";

export default class Hammer {
  constructor(item) {
    this.item = item;
  }
  showHammer() {
    this.item.addEventListener("mouseenter", () => {
      if (this.item.classList.contains("goblin")) {
        this.item.style.cursor = "url('6ead89c13e888cecc20d.png'), auto";
      }
    });
    this.item.addEventListener("mouseout", () => {
      this.item.style.cursor = "auto";
      this.item.removeEventListener("mouseenter", () => {});
    });
  }
}
