import { createElement } from "../helper/createElement.js";


const section = createElement("section", { class: "sudoku" });



export function renderSudoku() {
  for(let i = 1; i < 10; i++) {
    const square = createElement("div", { class: "square", id: "square"+ i })
    section.appendChild(square)
    for (let idx = 0; idx < 9; idx++) {
      const box = createElement("div", { class: "boxStyle manualWrite defaultWrite"},5) 
      square.appendChild(box);
    }
    
    section.appendChild(square);
  }
  return section;
}
