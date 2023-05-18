import { renderSudoku } from "../components/renderSudoku.js";
import { closeSudoku, sudoku } from "../components/constant.js"

 export let gameProcess = 0;

 easyMode.addEventListener("click", () => {
   if (sudoku.className !=="positionHidden") {

      closeSudoku.classList.remove("positionHidden");
      renderSudoku(15);
    }
  });
mediumMode.addEventListener("click", () => {
  if (sudoku.className!=="positionHidden") {
    closeSudoku.classList.remove("positionHidden");
    renderSudoku(35);
  }
});
hardMode.addEventListener("click", () => {
    if (!gameProcess) {
      gameProcess ++;
      closeSudoku.classList.remove("positionHidden");
      renderSudoku(55);
    }
  });
