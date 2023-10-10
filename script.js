document.getElementById("guessButton").addEventListener("click", guess);
let wrongGuesses = 0;
const wordList = [
  "programming",
  "Computer",
  "Table",
  "Chair",
  "Window",
  "Car",
  "Asphalt",
  "Building",
  "Bus",
];

function guess() {
  let userInput = document.getElementById("userInput");
  console.log(userInput.value);
}
