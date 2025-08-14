import Game from "./game";

console.log("app.js included");

//creating div inside game container.
const container = document.querySelector(".game-container");
const numberOfDivs = 16;
for (let i = 0; i < numberOfDivs; i++) {
  const newDiv = document.createElement("div");
  newDiv.classList.add("game-item");
  container.appendChild(newDiv);
}

const game = document.querySelector(".game");
const play = new Game(game);
play.start();
