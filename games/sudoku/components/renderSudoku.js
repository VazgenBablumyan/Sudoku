import { createElement } from "../helper/createElement.js";

createElement("section", { class: "sudoku" });

const bigTab = createElement("section", { class: "default" });
const square = createElement("div", { class: "square" });
const box = createElement("div", { class: "boxStyle" });

export function renderSudoku() {
  for (let i = 0; i < 9; i++) {
    bigTab.appendChild(square);
    for (let idx = 0; idx < 9; idx++) {
      square.appendChild(box);
    }
  }
  return bigTab;
}
