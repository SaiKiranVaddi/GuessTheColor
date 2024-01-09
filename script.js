const box1 = document.getElementById("box-1");
const box2 = document.getElementById("box-2");
const box3 = document.getElementById("box-3");
const guess = document.getElementById("guess");
const message = document.getElementById("message-container");
const displayScore = document.getElementById("score");

let ans = "";
let score = 0;
const init = () => {
  const boxes = [box1, box2, box3];
  const position = generateRandomPosition();
  for (let i = 0; i < boxes.length; i++) {
    const color = `rgb(${generateRandomNumber()}, ${generateRandomNumber()}, ${generateRandomNumber()})`;
    boxes[i].style.backgroundColor = color;
    if (i === position) {
      ans = color;
      guess.innerText = color;
    }
  }
};

function generateRandomNumber() {
  return Math.round(Math.random() * 255);
}

function generateRandomPosition() {
  return Math.round(Math.random() * 2);
}

function displayMessage(value) {
  value ? (message.innerText = "Correct") : (message.innerText = "Try Again");
}

box1.addEventListener("click", (e) => {
  const isCorrect = ans === box1.style.backgroundColor;
  displayMessage(isCorrect);
  if (isCorrect) {
    score += 1;
    displayScore.innerText = score;
  }
  init();
});

box2.addEventListener("click", () => {
  const isCorrect = ans === box2.style.backgroundColor;
  displayMessage(isCorrect);
  if (isCorrect) {
    score += 1;
    displayScore.innerText = score;
  }
  init();
});

box3.addEventListener("click", () => {
  const isCorrect = ans === box3.style.backgroundColor;
  displayMessage(isCorrect);
  if (isCorrect) {
    score += 1;
    displayScore.innerText = score;
  }
  init();
});

init();
