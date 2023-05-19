import { renderSudoku } from "../components/renderSudoku.js";
import { closeSudoku } from "../components/constant.js"

 export let gameProcess = false;

 easyMode.addEventListener("click", () => {
  if (!gameProcess) {
    closeSudoku.classList.remove("positionHidden");
    renderSudoku(15);
  }
  });
mediumMode.addEventListener("click", () => {
  if (!gameProcess) {
    closeSudoku.classList.remove("positionHidden");
    renderSudoku(35);
  }
});
hardMode.addEventListener("click", () => {
    if (!gameProcess) {
      closeSudoku.classList.remove("positionHidden");
      renderSudoku(55);
    }
  });
