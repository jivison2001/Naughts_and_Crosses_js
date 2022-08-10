console.log("This is naughts and crosses");

// stores values of each box
var board = [
  [' ',' ',' '],
  [' ',' ',' '],
  [' ',' ',' ']
]

// prints the board to prevent copying code
function print_board() {
  console.log(board[0][0] + ' ¦ ' + board[0][1] + ' ¦ ' + board[0][2]);
  console.log('---------');
  console.log(board[1][0] + ' ¦ ' + board[1][1] + ' ¦ ' + board[1][2]);
  console.log('---------');
  console.log(board[2][0] + ' ¦ ' + board[2][1] + ' ¦ ' + board[2][2]);
  console.log(' ');
}

function check_win(symbol) {
  if(board[0][0] === symbol && board[0][1] === symbol && board[0][2] === symbol){
    return true;
  }else if(board[1][0] === symbol && board[1][1] === symbol && board[1][2] === symbol) {
    return true;
  }else if(board[2][0] === symbol && board[2][1] === symbol && board[2][2] === symbol) {
    return true;
  }else if(board[0][0] === symbol && board[1][0] === symbol && board[2][0] === symbol) {
    return true;
  }else if(board[0][1] === symbol && board[1][1] === symbol && board[2][1] === symbol) {
    return true;
  }else if(board[0][2] === symbol && board[1][2] === symbol && board[2][2] === symbol) {
    return true;
  }else if(board[0][0] === symbol && board[1][1] === symbol && board[2][2] === symbol) {
    return true;
  }else if(board[0][2] === symbol && board[1][1] === symbol && board[2][0] === symbol) {
    return true;
  }else return false;
}

// game loop
function game() {
  let won = false;
  let turn = 1;
  while(won === false) {
    const row = prompt('Select row: ');
    const col = prompt('Select column: ');
    if(turn === 1) {
      board[row][col] = 'o';
      print_board();
      won = check_win('o');
      turn = (turn + 1) % 2;
    }else if(turn === 0) {
      board[row][col] = 'x';
      print_board();
      won = check_win('x');
      turn = (turn + 1) % 2;
    }
  }
  // if move has gone to the x player then o wins and vice versa
  if(turn === 0){
    console.log('o wins');
  }else {
    console.log('x wins')
  }
}

game();