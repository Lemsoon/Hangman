document.getElementById("startButton").addEventListener("click", startGame);
let main = document.querySelector("main");
let wordContainer = document.createElement("div");
wordContainer.style =
  "Display: flex; align-items: center; justify-content: center; text-decoration: underline 1px black";
main.appendChild(wordContainer);
let letterBox;
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
let secretWord = wordList[Math.floor(Math.random() * wordList.length)];
secretWord = secretWord.toUpperCase();
console.log(
  "There are " +
    wordList.length +
    " words to choose from \nThe chosen word is: ",
  secretWord
);
let letterButtons;

function startGame() {
  console.log("Starting game...");
  letterButtons = document.querySelectorAll("#alphabet-container>button");
  letterButtons.forEach((button) => {
    button.addEventListener("click", checkLetter);
  });
  secretWord = secretWord.split("");
  //creates a seperate <p> for each letter of the secret word.
  secretWord.forEach((letter) => {
    letterBox = document.createElement("p");
    letterBox.textContent = letter;
    letterBox.style = "margin-left: .5rem; color: transparent ";
    wordContainer.appendChild(letterBox);
  });
}

function checkLetter(event) {
  let clickedButton = event.target.innerText;
  console.log("You clicked: ", clickedButton);

  if (secretWord.includes(clickedButton)) {
    console.log("Word has ", clickedButton);

    letterBox.style = "margin-left: .5rem; color: black";
  }
}
