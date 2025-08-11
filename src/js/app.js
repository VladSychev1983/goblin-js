import Game from "./game";
console.log("app.js included");
const game = document.querySelector('.game');
const play = new Game(game);
play.start();
