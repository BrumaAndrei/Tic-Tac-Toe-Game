let gameMoves = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;
let roundWon = false;
let currentPlayer = "X";
finalMessage.innerHTML = `It's ${currentPlayer}'s turn`;

function PressBox(id) {
   if (document.getElementById(id).innerHTML === "" && gameActive === true) {
      document.getElementById(id).innerHTML = currentPlayer;
      gameMoves[id] = currentPlayer;
      checkWin();
      PlayerChange();
      finalText();
   }
}

function checkWin() {
   const winningConditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
   ];
   for (let i = 0; i <= 7; i++) {
      const PossibleMoves = winningConditions[i];
      let box0 = gameMoves[PossibleMoves[0]];
      let box1 = gameMoves[PossibleMoves[1]];
      let box2 = gameMoves[PossibleMoves[2]];
      if (box0 === box1 && box1 === box2 && box2 !== "") {
         roundWon = true;
         gameActive = false;
         break
      }
   }
}

function PlayerChange() {
   if (gameActive) {
      currentPlayer = currentPlayer === "X" ? "O" : "X";
      finalMessage.innerHTML = `It's ${currentPlayer}'s turn`;
   }
}

function finalText() {
   if (roundWon) {
      finalMessage.innerHTML = `Player "${currentPlayer}" has won!`;
   } else if (!gameMoves.includes("")) {
      finalMessage.innerHTML = "Game ended in a draw!";
   }
}
