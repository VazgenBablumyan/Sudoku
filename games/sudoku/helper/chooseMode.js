import { renderSudoku } from "../components/renderSudoku.js";
import { closeSudoku } from "../components/constant.js"
import { GameEnd } from "../components/gameEnd.js";

 export let gameProcess = false;

 closeSudoku.addEventListener("click", ()=> {
  GameEnd()
   gameProcess = false
});

 easyMode.addEventListener("click", () => {
  if (!gameProcess) {
    gameProcess = true
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
