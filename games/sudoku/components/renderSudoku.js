import { gameProcess } from "../helper/chooseMode.js"
import { createElement } from "../helper/createElement.js";
import { playMode } from "../makeSudoku.js";
import { Box } from "./singleBox.js";
import { startSudoku, sudokuPage,closeSudoku,sudoku, closeSudokuPage  } from "./constant.js";


startSudoku.addEventListener("click", () =>
  sudokuPage.classList.remove("positionHidden"),
  console.log("SS",sudoku.className)
);
closeSudoku.addEventListener("click", ()=> {
   sudoku.classList.add("positionHidden")
   
});

closeSudokuPage.addEventListener("click", () =>
  sudokuPage.classList.add("positionHidden")
);

export function renderSudoku(empties) {
  const section = document.getElementById("sudoku");
  const boxes = playMode(empties);
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
  return section;
}
