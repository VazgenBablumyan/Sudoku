let board=[
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0]
  ]
  let score=0
  let rows=4
  let columns=4
  window.onload=function (){
    setGame()
  }
  function setGame(){
      for (let i=0; i<rows; i++) {
          for(let j=0;j<columns;j++){
              let tile=document.createElement("div");
              tile.id=i.toString()+"-"+j.toString()
              let num=board[i][j]
              updateTile(tile,num)
              document.getElementById("board").append(tile)
          }
        }
        setTwo()
        setTwo()
      }
      function hasEmptyTile(){
        let count=0
        for(let i=0;i<rows;i++){
          for(let j=0;j<columns;j++){
            if(board[i][j]==0){
              return true
            }
          }
        }
        return false
      }
    function setTwo(){
      if(!hasEmptyTile()){
        return
      }
      let found=false
      while(!found){
      let i=Math.floor(Math.random()*rows)
      let j=Math.floor(Math.random()*columns)
      if(board[i][j]==0){
        board[i][j]=2
        let tile=document.getElementById(i.toString()+"-"+j.toString())
        tile.innerText="2"
        tile.classList.add("x2")
        found=true
      }
    }
  }
    function updateTile(tile,num){
      tile.innerText=""
      tile.classList.value=""
      tile.classList.add("tile")
      if(num>0){
        tile.innerText=num.toString()
        if(num<=4096){
          tile.classList.add("x"+num.toString())
        }else{
          tile.classList.add("x8192")
        }
      }
    }
  
    document.addEventListener('keyup', (e)=>{
      if(e.code=="ArrowLeft"){
        slideLeft()
        setTwo()
        isGameOver()
      }else if(e.code=="ArrowRight"){
        slideRight()
        setTwo()
        isGameOver()
      }else if(e.code=="ArrowUp"){
        slideUp()
        setTwo()
        isGameOver()
      }else if(e.code=="ArrowDown"){
        slideDown()
        setTwo()
        isGameOver()
      }
      document.getElementById("score").innerText=score
    })
    function filterZero(row){
      return row.filter((num) => num!=0)
    }
    function slide(row){
      row=filterZero(row)
      for(let i=0;i<row.length-1;i++){
        if(row[i]==row[i+1]){
          row[i]*=2
          row[i+1]=0
          score+=row[i]
        }
      }
      row=filterZero(row)
      while(row.length<columns){
        row.push(0)
      }
      return row
    }
    function slideLeft(){
      for(let i=0;i<rows;i++){
      let row=board[i]
      row=slide(row)
      board[i]=row
    for(let j=0;j<columns;j++){
      let tile=document.getElementById(i.toString()+"-"+j.toString())
      let num=board[i][j]
      updateTile(tile,num)
    }
  }
  }
  function slideRight(){
    for(let i=0;i<rows;i++){
    let row=board[i]
    row.reverse()
    row=slide(row)
    board[i]=row.reverse()
  for(let j=0;j<columns;j++){
    let tile=document.getElementById(i.toString()+"-"+j.toString())
    let num=board[i][j]
    updateTile(tile,num)
  }
  }
  }
  function slideUp() {
    for (let j=0; j<columns; j++) {
        let row = [board[0][j], board[1][j], board[2][j], board[3][j]]
        row = slide(row)
        for (let i=0; i<rows; i++){
            board[i][j] = row[i]
            let tile = document.getElementById(i.toString() + "-" + j.toString())
            let num = board[i][j]
            updateTile(tile, num)
        }
    }
  }
  
  function slideDown(){
    for(let j=0;j<columns;j++){
      let row=[board[0][j],board[1][j],board[2][j],board[3][j]]
      row.reverse()
      row=slide(row)
      row.reverse()
    for(let i=0;i<rows;i++){
      board[i][j]=row[i]
      let tile=document.getElementById(i.toString()+"-"+j.toString())
      let num=board[i][j]
      updateTile(tile,num)
    }
  }
  }
  function isGameOver() {
    for(let i=0; i<rows; i++) {
      for(let j=0; j<columns; j++) {
        if(board[i][j] == 0) {
          return false;
        }
      }
    }
    for(let i=0; i<rows; i++) {
      for(let j=0; j<columns; j++) {
        let current = board[i][j];
        if(j < columns - 1 && current == board[i][j+1]) {
          return false;
        }
        if(i < rows - 1 && current == board[i+1][j]) {
          return false;
        }
      }
    }
    alert("Game Over!!");
    return true;
  }
  