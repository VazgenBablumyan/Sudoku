function sudokuBoard() {
  const board = [];
  for (let i = 0; i < 9; i++) {
    board[i] = [];
    for (let j = 0; j < 9; j++) {
      board[i][j] = 0;
    }
  }
  generateHelper(board, 0, 0);
  return board;
}
function generateHelper(board, row, col) {
  if (col === 9) {
    row++;
    col = 0;
    if (row === 9) {
      return true;
    }
  }
  const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  shuffleArray(nums);
  for (let i = 0; i < 9; i++) {
    const num = nums[i];
    if (isValid(board, row, col, num)) {
      board[row][col] = num;
      if (generateHelper(board, row, col + 1)) {
        return true;
      }
      board[row][col] = 0;
    }
  }
  return false;
}
function isValid(board, row, col, num) {
  for (let i = 0; i < 9; i++) {
    if (board[row][i] === num) {
      return false;
    }
  }
  for (let i = 0; i < 9; i++) {
    if (board[i][col] === num) {
      return false;
    }
  }
  const boxRow = Math.floor(row / 3) * 3;
  const boxCol = Math.floor(col / 3) * 3;
  for (let i = boxRow; i < boxRow + 3; i++) {
    for (let j = boxCol; j < boxCol + 3; j++) {
      if (board[i][j] === num) {
        return false;
      }
    }
  }
  return true;
}
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
const board = sudokuBoard();
function easy(){
   const countOfEmptyItems = Math.ceil(Math.random() * 10 + 10)
   let counter = 0
   as: for(let i = 0; counter < countOfEmptyItems; i++){
    let row = board[i]
    for(let idx = 0; counter < countOfEmptyItems; idx++){

      if(Math.random()<0.2 && Math.random()> 0.5){
        row[idx] = 0
        counter++
      }
      if(idx === 8){
        continue as
      }
    }
    if(i === 8){
      i = 0
    }
  }
  return board
}

console.log(easy());