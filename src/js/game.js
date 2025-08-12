export default class Game {
  constructor(dom) {
    this.gameContainer = dom.querySelector(".game-container");
    this.killedCounter = dom.querySelector(".killed-counter");
    this.missedCounter = dom.querySelector(".missed-counter");
    this.currentPosition = null;
    this.gameContainerSize = this.gameContainer.children.length;
    this.killed = 0;
    this.missed = 0;
  }
  start() {
    this.killedCounter.textContent = 0;
    this.missedCounter.textContent = 0;
    let timerInt = setInterval(() => {
      let pos = this.PositionGenerator();
      let gameItem = this.gameContainer.children[pos];
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
        console.log("killedTextContent-", this.killedCounter.textContent);
        if (this.killed == this.killedCounter.textContent) {
          this.missed++;
          this.missedCounter.textContent = this.missed;
        }
        this.killedCounter.textContent = this.killed;
      }, 700);
    }, 3000);
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
