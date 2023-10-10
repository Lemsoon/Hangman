document.getElementById("startButton").addEventListener("click", startGame);

const wordList = [
  "Programming",
  "Computer",
  "Table",
  "Chair",
  "Window",
  "Car",
  "Asphalt",
  "Building",
  "Bus",
  "Phone",
  "Time",
  "Frame",
  "Travel",
  "School",
  "Bag",
  "Airplane",
  "Fork",
  "Knife",
  "Roof",
  "Floor",
  "Wheel",
  "Tire",
  "Game",
  "Developer",
  "Message",
  "Hangman",
  "Flag",
  "Language",
  "Tree",
  "Leaf",
  "Summer",
  "Winter",
  "Fall",
  "spring",
];
console.log("There are ", wordList.length, " words to choose from");
let letterButtons;

function startGame() {
  console.log("Starting game...");
  letterButtons = document.querySelectorAll("#alphabet-container>button");
  letterButtons.forEach((button) => {
    button.addEventListener("click", checkLetter);
  });
}

function checkLetter() {
  console.log(letterButtons);
}
