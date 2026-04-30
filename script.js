const button = document.querySelector("button");
let playgame = true;
const prev = document.querySelector("#Prev");
const remain = document.querySelector("#Remain");
const result = document.querySelector("#result");
const submit = document.querySelector("#submit");
const restartBtn = document.createElement("button");
const input = document.querySelector("input");
restartBtn.innerHTML = "Restart";

let val = 10;
remain.innerHTML = `${val}`;

function guess() {
  // helps in random take the number
  const num = Math.trunc(Math.random() * 100 + 1);
  return num;
}

let quiz = guess();
console.log(quiz); // saves the computer random guess run only one time

function won(quiz, value) {
  if (quiz == value) {
    result.innerHTML = "YOU WIN CONGO!!!";
    submit.appendChild(restartBtn);
    playgame = false;
    input.disabled = true;
    return true;
  } else if (quiz > value) {
    result.innerHTML = "Guess Too Low";
    return false;
  } else if (quiz < value) {
    result.innerHTML = "Guess Too High";
    return false;
  }
}

restartBtn.addEventListener("click", () => {
  result.innerHTML = "";
  val = 10;
  quiz = guess();
  console.log(quiz);
  remain.innerHTML = `${val}`;
  prev.innerHTML = "";
  playgame = true;
  input.disabled = false;
  input.value = "";
  restartBtn.remove();
});

function updatePrev(value) {
  prev.innerHTML += `${value}, `;
}

function checkValue(value) {
  if (isNaN(value)) {
    result.innerHTML = "Please enter a number !!";
    return false;
  }
  if (value <= 0 || value > 100) {
    result.innerHTML = "Invalid Value Try Again !!";
    return false;
  }
  return true;
}
function endGame() {
  result.innerHTML = "Guess complete Try again";
  submit.appendChild(restartBtn);
}

button.addEventListener("click", () => {
  if (!playgame) return;

  result.innerHTML = "";
  const value = Number(input.value);
  input.value = "";

  if (!checkValue(value)) return;

  if (won(quiz, value)) return;

  updatePrev(value);
  if (val > 0) {
    remain.innerHTML = `${--val}`;
  }
  //helps in taking the value from the input
  if (val === 0) {
    endGame();
    return;
  }
});
