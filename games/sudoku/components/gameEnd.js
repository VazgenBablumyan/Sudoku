import { sudoku } from "./constant.js"

 export function GameEnd(){
    sudoku.classList.add("positionHidden")
    for( let i = 0; i< 9; i++){
     sudoku.removeChild(sudoku.lastChild)
    }
}
export function closeGameIf3Mistakes() {
  let gameEnd = document.getElementById("gameEnd");
  gameEnd.classList.remove("positionHidden");
  let gameEndID = setTimeout(() => {
    gameEnd.classList.add("positionHidden");
    GameEnd()
  }, 5000);
  gameEnd.addEventListener("click", () => {
    gameEnd.classList.add("positionHidden");
    clearTimeout(gameEndID)
    GameEnd()
})
  
}
