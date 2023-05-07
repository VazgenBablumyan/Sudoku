import { createElement } from "../helper/createElement.js";

createElement("section", { class: "sudoku" });
const section = createElement("section", { class: "sudoku" },);

export function renderSudoku() {
  for(let i = 1; i < 10; i++) {
    const square = createElement("div", { class: "square", id: "square"+ i })
    for (let idx = 0; idx < 9; idx++) {
      const box = createElement("div", { class: "boxStyle"},5) 
      square.appendChild(box);
    }
    
    bigTab.appendChild(section);
  }
  return bigTab;
}
