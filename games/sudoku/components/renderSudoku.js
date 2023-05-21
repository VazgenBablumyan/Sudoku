import { createElement } from "../helper/createElement.js";
import { counterForGameEnd, hiddenNumbers, playMode } from "../makeSudoku.js";
import { Box } from "./singleBox.js";
import { startSudoku, sudokuPage, closeSudokuPage, sudoku  } from "./constant.js";
import { closeGameIf3Mistakes } from "./gameEnd.js";


startSudoku.addEventListener("click", () =>
  sudokuPage.classList.remove("positionHidden"),
);


closeSudokuPage.addEventListener("click", () =>
  sudokuPage.classList.add("positionHidden")
);

export function renderSudoku(empties) {
    sudoku.classList.remove("positionHidden")
  
  const section = document.getElementById("sudoku");
  const boxes = new playMode(empties);
  for (let i = 0; i < 9; i++) {
    const square = createElement("div", { class: "square", id: "square" + i });

    section.appendChild(square);
    for (let idx = 0; idx < 9; idx++) {
      square
        .appendChild(Box({ value: boxes[i][idx] }))
        .classList.add(`${i + `` + idx}`);
    }

    section.appendChild(square);
  }
const inputes = document.querySelectorAll(".manualWrite");
let counter = 0
let counterForInput = 0

inputes.forEach((input) => {
  input.addEventListener("keyup", (event) => {
    let i = input.className[21];
    let idx = input.className[22];
    if (event.target.value == hiddenNumbers[i][idx]) {
      counterForInput++;
      if (counterForInput == counterForGameEnd){
        console.log("game end congratulat");

      }
      console.log("YEEEEEES");
    } else {
      counter++;
      console.log("NOOOOO")
    if(counter == 3){
      closeGameIf3Mistakes()
      }
    }
  
  });
});
  return section;
}
