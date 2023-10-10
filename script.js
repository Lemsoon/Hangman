let wordContainer = document.createElement("div");
let main = document.querySelector("main").appendChild(wordContainer);
let letterButtons;
wordContainer.style = "Display: flex; justify-content: center; text-decoration: underline 1px black";
let letterBox;
let letterIndex = 0;

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
secretWord = secretWord.split("");
document.getElementById("startButton").addEventListener("click", startGame);

console.log("There are " + wordList.length + " words to choose from \nThe chosen word is: ", secretWord);

function startGame() {
  console.log("Starting game...");
  letterButtons = document.querySelectorAll("#alphabet-container>button");
  letterButtons.forEach((button) => {
    button.addEventListener("click", checkLetter);
  });

  //creates a seperate <p> for each letter of the secret word.
  secretWord.forEach((letter) => {
    letterBox = document.createElement("p");
    letterBox.id = letterIndex;
    wordContainer.appendChild(letterBox);
    letterBox.textContent = letter;
    letterBox.style = "margin-left: .5rem; color: rgba(0, 0, 0, 0) ";
    letterIndex++;
  });
}

function checkLetter(event) {
  let clickedLetter = event.target.innerText;
  letterBoxArray = Array.from(wordContainer.getElementsByTagName("p"));

  letterBoxArray.forEach((letterBox) => {
    let letter = letterBox.textContent;
    if (clickedLetter == letter) {
      letterBox.style.color = "rgba(0, 0, 0, 1)";
    }
  });
}
