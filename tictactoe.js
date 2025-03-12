const board = document.getElementById("board");
const cells = document.querySelectorAll(".cell");
const statusText = document.getElementById("status");
const resetButton = document.getElementById("reset");

let currentPlayer = "X";
let gameState = ["", "", "", "", "", "", "", "", ""];
const winningConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function checkWinner() {
  for (let condition of winningConditions) {
    const [a, b, c] = condition;
    if (
      gameState[a] &&
      gameState[a] === gameState[b] &&
      gameState[a] === gameState[c]
    ) {
      statusText.innerText = `Player ${currentPlayer} Wins!`;
      return true;
    }
  }
  if (!gameState.includes("")) {
    statusText.innerText = "It's a Draw!";
    return true;
  }
  return false;
}

function handleClick(event) {
  const index = event.target.dataset.index;
  if (gameState[index] === "" && statusText.innerText.includes("Turn")) {
    gameState[index] = currentPlayer;
    event.target.innerText = currentPlayer;
    if (checkWinner()) return;
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    statusText.innerText = `Player ${currentPlayer}'s Turn`;
  }
}

function resetGame() {
  gameState.fill("");
  cells.forEach((cell) => (cell.innerText = ""));
  currentPlayer = "X";
  statusText.innerText = "Player X's Turn";
}

cells.forEach((cell) => cell.addEventListener("click", handleClick));
resetButton.addEventListener("click", resetGame);
