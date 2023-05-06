import { createElement } from "../helper/createElement.js";

createElement("section", { class: "sudoku" });
const bigTab = createElement("section", { class: "sudoku" },);


export function renderSudoku() {
  for(let i = 1; i < 10; i++) {
    let currentSquare = bigTab.appendChild(createElement("div", { class: "square", id: "square"+ i }));
    for (let idx = 0; idx < 9; idx++) {
      currentSquare.appendChild(createElement("div", { class: "boxStyle" })  );
    }
  }
  return bigTab;
}
