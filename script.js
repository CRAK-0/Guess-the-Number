const button = document.querySelector("button");
const prev = document.querySelector("#Prev");
const remain = document.querySelector("#Remain");
const result = document.querySelector("#result");

function guess() {
  // helps in random take the number
  const num = Math.trunc(Math.random() * 100 + 1);
  return num;
}

const quiz = guess();
console.log(quiz); // saves the computer random guess run only one time

let val = 10;
remain.innerHTML = `${val}`;

button.addEventListener("click", () => {
  result.innerHTML = "";
  const value = document.querySelector("input").value;
  if (quiz == value) {
    result.innerHTML = "YOU WIN CONGO!!!";
    return;
  }
  if (val === 0) {
    result.innerHTML = "Guess complete Try again";
    return;
  }
  console.log(value);
  if (isNaN(value)) {
    result.innerHTML = "Please enter a number !!";
    return;
  }
  if (value <= 0 || value > 100) {
    result.innerHTML = "Invalid Value Try Again !!";
    return;
  }
  prev.innerHTML = `${value}`;
  if (val > 0) {
    remain.innerHTML = `${--val}`;
  }
  //helps in taking the value from the input
});
