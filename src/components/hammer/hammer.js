import "./hammer.css";

export default class Hammer {
  constructor(item) {
    this.item = item;
  }
  showHammer() {
    this.item.addEventListener("mouseenter", () => {
      if (this.item.classList.contains("goblin")) {
        //this.item.classList.add("hammer-cursor");
        this.item.style.cursor = "url('6ead89c13e888cecc20d.png'), auto";
        console.log("goblin detected!");
      }
    });
    this.item.addEventListener("mouseout", () => {
      this.item.style.cursor = "auto";
      //this.item.classList.remove("hammer-cursor");
      this.item.removeEventListener("mouseenter", () => {});
    });
  }
}
