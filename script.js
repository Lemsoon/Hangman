let wordContainer = document.createElement("div");
let main = document.querySelector("main").appendChild(wordContainer);
let letterButtons;
wordContainer.style = "Display: flex; justify-content: center; text-decoration: underline 1px black";
let letterBox;
let correctLetters = 0;
let guesses = 0;
let hangedmanHead = document.getElementById("head");
let hangedmanLegs = document.getElementById("legs");
let hangedmanArms = document.getElementById("arms");
let hangedmanBody = document.getElementById("body");
let hangedmanScaffold = document.getElementById("scaffold");

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
  hangedmanHead.style.opacity = 0;
  hangedmanLegs.style.opacity = 0;
  hangedmanArms.style.opacity = 0;
  hangedmanBody.style.opacity = 0;
  hangedmanScaffold.style.opacity = 0;
  letterButtons = document.querySelectorAll("#alphabet-container>button");
  letterButtons.forEach((button) => {
    button.addEventListener("click", checkLetter);
  });

  //creates a seperate <p> for each letter of the secret word.
  secretWord.forEach((letter) => {
    letterBox = document.createElement("p");
    wordContainer.appendChild(letterBox);
    letterBox.textContent = letter;
    letterBox.style = "margin-left: .5rem; color: rgba(0, 0, 0, 0) ";
  });
}

function checkLetter(event) {
  guesses++;
  hangTheMan(guesses);

  console.log(guesses);
  let clickedLetter = event.target;
  let clickedLetterText = clickedLetter.innerText;
  clickedLetter.style = "background-color: black;";
  clickedLetter.removeEventListener("click", checkLetter);
  letterBoxArray = Array.from(wordContainer.getElementsByTagName("p"));

  letterBoxArray.forEach((letterBox) => {
    let letter = letterBox.textContent;
    //Checks if chosen letter is in the word
    if (clickedLetterText == letter) {
      letterBox.style.color = "rgba(0, 0, 0, 1)";
      clickedLetter.style = "background-color: black;";
      clickedLetter.removeEventListener("click", checkLetter);
      correctLetters++;
      console.log("correct guesses", correctLetters);
    }
    //Win detection
    if (correctLetters == letterBoxArray.length) {
      console.log("WIN");
    }
  });
}

function hangTheMan(num) {
  console.log("hangin");
  switch (num) {
    case 1:
      hangedmanScaffold.style.opacity = 1;
      break;
    case 2:
      hangedmanHead.style.opacity = 1;
      break;
    case 3:
      hangedmanBody.style.opacity = 1;
      break;
    case 4:
      hangedmanArms.style.opacity = 1;
      break;
    case 5:
      console.log("THE MAN DIED");
      return (hangedmanLegs.style.opacity = 1);
      break;
  }
}
