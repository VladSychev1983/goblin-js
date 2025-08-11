export default class Game {
  constructor(dom) {
    this.GameContainer = dom.querySelector(".game-container");
    this.KilledCounter = dom.querySelector(".killed-counter");
    this.MissedCounter = dom.querySelector(".missed-counter");
    this.CurrentPosition = null;
    this.GameContainerSize = this.GameContainer.children.length;
    this.killed = 0;
    this.missed = 0;
  }
  start() {
    this.KilledCounter.textContent = 0;
    this.MissedCounter.textContent = 0;
    let timerInt = setInterval(() => {
      let pos = this.PositionGenerator();
      let gameItem = this.GameContainer.children[pos];
      gameItem.classList.add("goblin");
      console.log("current pos:" + pos);
      gameItem.addEventListener("click", () => {
        //увеличиваем счетчик если при клике есть класс гоблин
        if (gameItem.classList.contains("goblin")) {
          this.killed++;
        }
        console.log(this.killed);
        console.log(gameItem.classList.contains("goblin"));
      });
      const timerId = setTimeout(() => {
        console.log("Прошлa 1 секунда");
        gameItem.classList.remove("goblin");
        if (this.killed >= 10) {
          alert("Победа!");
          clearInterval(timerInt);
        }
        if (this.missed >= 10) {
          alert("Вы проиграли!");
          clearInterval(timerInt);
        }
        console.log("killed-", this.killed);
        console.log("killedTextContent-", this.KilledCounter.textContent);
        if (this.killed == this.KilledCounter.textContent) {
          this.missed++;
          this.MissedCounter.textContent = this.missed;
        }
        this.KilledCounter.textContent = this.killed;
      }, 700);
    }, 3000);
  }

  PositionGenerator() {
    let pos = Math.floor(Math.random() * this.GameContainerSize);
    while (pos === this.CurrentPosition) {
      pos = Math.floor(Math.random() * this.GameContainerSize);
    }
    this.CurrentPosition = pos;
    return pos;
  }
}
