const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
const restartButton = document.getElementById("restart");

const box = 20;
let snake = [{ x: 10 * box, y: 10 * box }];
let direction = "RIGHT";
let food = {
  x: Math.floor(Math.random() * 20) * box,
  y: Math.floor(Math.random() * 20) * box,
};

function draw() {
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "red";
  ctx.fillRect(food.x, food.y, box, box);

  ctx.fillStyle = "lime";
  for (let i = 0; i < snake.length; i++) {
    ctx.fillRect(snake[i].x, snake[i].y, box, box);
  }

  let newHead = { x: snake[0].x, y: snake[0].y };
  if (direction == "LEFT") newHead.x -= box;
  if (direction == "UP") newHead.y -= box;
  if (direction == "RIGHT") newHead.x += box;
  if (direction == "DOWN") newHead.y += box;

  if (newHead.x == food.x && newHead.y == food.y) {
    food = {
      x: Math.floor(Math.random() * 20) * box,
      y: Math.floor(Math.random() * 20) * box,
    };
  } else {
    snake.pop();
  }

  snake.unshift(newHead);
}

document.addEventListener("keydown", (event) => {
  if (event.key == "ArrowLeft" && direction != "RIGHT") direction = "LEFT";
  if (event.key == "ArrowUp" && direction != "DOWN") direction = "UP";
  if (event.key == "ArrowRight" && direction != "LEFT") direction = "RIGHT";
  if (event.key == "ArrowDown" && direction != "UP") direction = "DOWN";
});

restartButton.addEventListener("click", () => {
  snake = [{ x: 10 * box, y: 10 * box }];
  direction = "RIGHT";
  food = {
    x: Math.floor(Math.random() * 20) * box,
    y: Math.floor(Math.random() * 20) * box,
  };
});

setInterval(draw, 100);
