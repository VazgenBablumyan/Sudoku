import { hiddenNumbers } from "../makeSudoku.js"

let counter = 0
function closeGame(){
    let gameEnd=document.getElementById("gameEnd")
    gameEnd.classList.remove("positionHidden")
        setTimeout(()=>{
            gameEnd.classList.add("positionHidden")
        },5000)
    }
let inputes = document.querySelectorAll(".manualWrite")
inputes.forEach((input) =>{
    input.addEventListener("keyup",(event)=>{
        let i =input.className[21]
           let idx =input.className[22]
           console.log(hiddenNumbers[i][idx])
           if(event.target.value == hiddenNumbers[i][idx]){
            console.log("YEEEEEES")
           }else{
            counter++
            console.log("Sssss")
           }
           if(counter == 3){
            closeGame()
           }
    })
})
