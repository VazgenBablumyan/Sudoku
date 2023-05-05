import { Play } from "./games/sudoku/helper/chooseMode.js"
import { CreateHeader } from "./games/sudoku/components/header.js"
import { renderSudoku } from "./games/sudoku/components/renderSudoku.js"

const root = document.getElementById("root")
root.appendChild(CreateHeader())
root.appendChild(Play)
root.appendChild(renderSudoku())