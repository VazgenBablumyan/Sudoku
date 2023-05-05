import { playMode } from "../makeSudoku.js";
import { createElement } from "./createElement.js";
export let gameMode = 0
 const easy = createElement("button",{
    class: "easy",
    onClick: () => playMode(15) 
    }, "EASY")
const medium = createElement("button",{
    class: "medium",
    onClick: () => playMode(35)
    }, "MEDIUM")
const hard = createElement("button",{
    class: "hard",
    onClick: () => playMode(60)
}, "HARD")


export const Play = createElement("div",{class:"mode"}, easy, medium, hard  )

 
