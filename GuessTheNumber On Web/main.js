document.getElementById("range").addEventListener("submit", findRange);
document.getElementById("input").addEventListener("submit", checkInput);

let previousattempts = localStorage.getItem("attempts") || [];
document.getElementById("attempts").innerText = `Attempts: ${previousattempts}`;
let previousScore = localStorage.getItem("score") || [];
document.getElementById("score").innerText = `Score: ${previousScore}`;
let randomNumber;
function findRange() {
  event.preventDefault();
  previousattempts++;
  localStorage.setItem("attempts", previousattempts);
  document.getElementById(
    "attempts"
  ).innerText = `Attempts: ${previousattempts}`;
  let minRange = document.getElementById("from").value;
  let maxRange = document.getElementById("to").value;
  randomNumber = Math.abs(
    Math.floor((Math.random() * maxRange + 1 - minRange + 1) / minRange)
  );
  document.getElementById("output").style.display = "inline";
  document.getElementById("output").innerText =
    "Please guess a number, enter it, and press Guess.";
  console.log(randomNumber);
}
let attempt = 0;
function checkInput() {
  event.preventDefault();
  let num = document.getElementById("input_number").value;
  if (attempt == 6) {
    alert("No More Attempts Ramain! Try again.");
    return 0;
  } else {
    if (num == randomNumber) {
      previousScore++;
      attempt++;
      localStorage.setItem("score", previousScore);
      document.getElementById("score").innerText = `Score: ${previousScore}`;
      alert(`Congratulation! You have guessed in ${attempt} Attepmts.`);
      window.location.reload();
    } else if (num < randomNumber) {
      attempt++;
      document.getElementById(
        "output"
      ).innerText = `The number is greater then ${num}, ${
        6 - attempt
      } Attepmts Remain.`;
    } else if (num > randomNumber) {
      attempt++;
      document.getElementById(
        "output"
      ).innerText = `The number is less then ${num}, ${
        6 - attempt
      } Attepmts Remain.`;
    }
  }
}
