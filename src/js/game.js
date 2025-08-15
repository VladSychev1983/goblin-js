import Hammer from "../components/hammer/hammer";
export default class Game {
  constructor(dom) {
    this.gameContainer = dom.querySelector(".game-container");
    this.killedCounter = dom.querySelector(".killed-counter");
    this.missedCounter = dom.querySelector(".missed-counter");
    this.currentPosition = null;
    this.gameContainerSize = this.gameContainer.children.length;
    this.killed = 0;
    this.missed = 0;
    this.maxMissedValue = 5;
    this.maxKilledValue = 5;
    this.killedCounter.textContent = 0;
    this.missedCounter.textContent = 0;
  }
  start() {
    const timerInt = setInterval(() => {
      let pos = this.PositionGenerator();
      let gameItem = this.gameContainer.children[pos];
      //показываем курсор молоток
      const hammer = new Hammer(gameItem);
      hammer.showHammer();
      gameItem.classList.add("goblin");
      const timerTm = setTimeout(() => {
        gameItem.classList.remove("goblin");
        this.missed++;
        this.missedCounter.textContent = this.missed;
      }, 999);
      this.checkResult(timerInt, timerTm);
    }, 1000);
    //навешиваем событие на клик.
    const array = Array.from(this.gameContainer.children);
    array.forEach((element, index) => {
      element.addEventListener("click", () => {
        if (!element.classList.contains("goblin")) {
          element.classList.remove("goblin");
          this.missed++;
          this.missedCounter.textContent = this.missed;
        } else {
          element.classList.remove("goblin");
          this.killed++;
          this.missed--;
          this.killedCounter.textContent = this.killed;
        }
      });
    });
  }

  PositionGenerator() {
    let pos = Math.floor(Math.random() * this.gameContainerSize);
    while (pos === this.currentPosition) {
      pos = Math.floor(Math.random() * this.gameContainerSize);
    }
    this.currentPosition = pos;
    return pos;
  }

  checkResult(timerInt, timerTm) {
    if (this.killed >= this.maxKilledValue) {
      alert("Победа!");
      clearInterval(timerInt);
      clearTimeout(timerTm);
      return;
    }
    if (this.missed >= this.maxMissedValue) {
      alert("Вы проиграли!");
      clearInterval(timerInt);
      clearTimeout(timerTm);
      return;
    }
  }
}
