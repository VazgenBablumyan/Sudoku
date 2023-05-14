import { renderSudoku } from "../components/renderSudoku.js";
import { createElement } from "./createElement.js";

    const easy = createElement("button",{  
    id: "easyMode",
    }, "EASY")
    const medium = createElement("button",{
    id: "medium",
    }, "MEDIUM")
    const hard = createElement("button",{
    id: "hard",
    }, "HARD")
    let a = document.getElementById("easyMode")
    window.onload= function(){
   document.getElementById("medium").addEventListener("onClick", renderSudoku(35))
   //   document.getElementById("hard").addEventListener("click", renderSudoku(35))
    }
 export const Play = createElement("div",{class:"mode"}, easy, medium)
 
 

 

 
