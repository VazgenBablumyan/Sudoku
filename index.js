import { Play } from "./games/sudoku/helper/chooseMode.js"
import { Header } from "./games/sudoku/components/Header.js"
import { renderSudoku } from "./games/sudoku/components/renderSudoku.js"

const root = document.getElementById("root")
root.append(Header())
root.append(Play)
root.append(renderSudoku())