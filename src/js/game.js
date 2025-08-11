// eslint-disable-next-line prettier/prettier
export default class Game {
  constructor(dom) {
    this.GameContainer = dom.querySelector(".game-container");
    this.KilledCounter = dom.querySelector(".killed-counter");
    this.MissedCounter = dom.querySelector(".missed-counter");
    this.CurrentPosition = null;
    this.GameContainerSize = this.GameContainer.children.length;
  }
  start() {
    this.KilledCounter.textContent = 0;
    this.MissedCounter.textContent = 0;
    setInterval(() => {
        let pos = this.PositionGenerator();
        let gameItem = this.GameContainer.children[pos];
        gameItem.classList.add('goblin');
        console.log('current pos:' + pos);
        const timerId = setTimeout(() => {
        console.log('Прошлa 1 секунда');
        gameItem.classList.remove('goblin');
        }, 1000)
  }, 2000);
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