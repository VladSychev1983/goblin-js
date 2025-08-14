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
    this.maxMissedValue = 4;
    this.maxKilledValue = 9;
  }
  start() {
    this.killedCounter.textContent = 0;
    this.missedCounter.textContent = 0;
    let timerInt = setInterval(() => {
      let pos = this.PositionGenerator();
      let gameItem = this.gameContainer.children[pos];
      //show hammer on mouseenter
      const hammer = new Hammer(gameItem);
      hammer.showHammer();

      gameItem.classList.add("goblin");
      gameItem.addEventListener("click", () => {
        //увеличиваем счетчик если при клике есть класс гоблин
        if (gameItem.classList.contains("goblin")) {
          this.killed++;
        }
      });
      const timerId = setTimeout(() => {
        //console.log("Прошлa 1 секунда");
        gameItem.classList.remove("goblin");
        if (this.killed >= this.maxKilledValue) {
          alert("Победа!");
          clearInterval(timerInt);
        }
        if (this.missed >= this.maxMissedValue) {
          alert("Вы проиграли!");
          clearInterval(timerInt);
        }

        if (this.killed == this.killedCounter.textContent) {
          this.missed++;
          this.missedCounter.textContent = this.missed;
        }
        this.killedCounter.textContent = this.killed;
      }, 700);
    }, 1000);
  }

  PositionGenerator() {
    let pos = Math.floor(Math.random() * this.gameContainerSize);
    while (pos === this.currentPosition) {
      pos = Math.floor(Math.random() * this.gameContainerSize);
    }
    this.currentPosition = pos;
    return pos;
  }
}
