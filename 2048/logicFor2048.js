let grid=[
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0]
]
for (let i = 0; i < 2; i++) {
    let row = Math.floor(Math.random() * 4)
    let col = Math.floor(Math.random() * 4)
    let num = 2 
    if (grid[row][col] === 0) { 
      grid[row][col] = num
    } else { 
      i--
    }
  }
function moveUp(){
  let currentRow=0
for(let i=0;i<grid.length;i++){
  for(let j=1;j<grid.length;j++){
   if(grid[i][j]!==0){
    if(grid[currentRow][j]===0)
    grid[currentRow][j]=grid[i][j]
    grid[i][j]=0
   }else if(grid[currentRow][j]===grid[i][j]){
    grid[currentRow][j]*=2
    grid[i][j]=0
    currentRow++
   }else{
    currentRow++
    grid[currentRow][j]=grid[i][j]
    grid[i][j]=0
   }
  }
}
return grid
}
function moveDown(){
    let currentRow = 3
    for(let i =3; i>=0; i--){
      for(let j =2; j>= 0; j--){
        if(grid[i][j]!==0){
          if(grid[currentRow][j]===0){
            grid[currentRow][j]=grid[i][j]
            grid[i][j]=0
          } else if(grid[currentRow][j]===grid[i][j]){
            grid[currentRow][j]*=2
            grid[i][j]=0
            currentRow--
          } else {
            currentRow--
            grid[currentRow][j]=grid[i][j]
            grid[i][j]=0
          }
        }
      }
    }
    return grid
  }
  function moveRight(){
    for(let i=0; i<grid.length; i++){
      let currentCol=grid.length-1
      for(let j=grid.length-2; j>=0; j--){
        if(grid[i][j]!==0){
          if(grid[i][currentCol]===0){
            grid[i][currentCol]=grid[i][j]
            grid[i][j]=0
        }else if(grid[i][currentCol]===grid[i][j]){
        grid[i][currentCol]*=2
         grid[i][j]=0
          currentCol--
     }else{
     currentCol--
      grid[i][currentCol]=grid[i][j]
      grid[i][j]=0
  }
  }
  }
  }
  return grid
  }
  function moveLeft(){
    let currentCol=0
    for(let i=1; i<grid.length; i++){
      for(let j=0; j<grid.length; j++){
        if(grid[i][j]!==0){
          if(grid[i][currentCol]===0){
            grid[i][currentCol]=grid[i][j]
            grid[i][j]=0
          } else if(grid[i][currentCol]===grid[i][j]){
            grid[i][currentCol]*=2
            grid[i][j]=0
            currentCol++
          } else {
            currentCol++
            grid[i][currentCol]=grid[i][j]
            grid[i][j]=0
          }
        }
      }
      currentCol=0
    }
    return grid
  }