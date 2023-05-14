import { createElement } from "../helper/createElement.js";
import { playMode } from "../makeSudoku.js";
import { Box } from "./singleBox.js";


const section = createElement("section", { class: "sudoku" });

export function renderSudoku(empties) {
  const boxes = playMode(empties)
  for(let i = 1; i < 10; i++) {
    const square = createElement("div", { class: "square", id: "square"+ i })
    section.appendChild(square)
    for (let idx = 0; idx < 9; idx++) {

      square.appendChild(Box({value:boxes[i - 1][idx]}));
    }
    
    section.appendChild(square);
  }
  return section;
}
