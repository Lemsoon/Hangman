//#region
let hangedManSVG = document.querySelector("svg");
let letterElement;
let bodyparts = hangedManSVG.querySelectorAll("path");
let looped = false;
let correctLetters = 0;
let win = false;
let lost = false;
let wordContainer = document.getElementById("wordContainer");
let main = document.querySelector("main");
let letterButtons = [];
let wrongGuesses = 0;
let secretWord;
let guessedLetters = [];
let loseWord = "";

const wordList = [
  "Car",
  "House",
  "Boat",
  "Phone",
  "Book",
  "Chair",
  "Table",
  "Laptop",
  "Bicycle",
  "Television",
  "Refrigerator",
  "Cup",
  "Bottle",
  "Glasses",
  "Watch",
  "Pencil",
  "Notebook",
  "Bag",
  "Shoes",
  "Hat",
  "Clock",
  "Spoon",
  "Fork",
  "Plate",
  "Knife",
  "Key",
  "Wallet",
  "Brush",
  "Comb",
  "Towel",
  "Soap",
  "Toothbrush",
  "Toothpaste",
  "Shampoo",
  "Conditioner",
  "Lamp",
  "Candle",
  "Pillow",
  "Blanket",
  "Bed",
  "Socks",
  "Jacket",
  "Scarf",
  "Gloves",
  "Umbrella",
  "Headphones",
  "Camera",
  "Printer",
  "Mouse",
  "Keyboard",
  "Monitor",
  "Speakers",
  "Router",
  "Modem",
  "Charger",
  "Battery",
  "Flashlight",
  "Screwdriver",
  "Hammer",
  "Nail",
  "Paintbrush",
  "Canvas",
  "Easel",
  "Palette",
  "Sketchbook",
  "Eraser",
  "Ruler",
  "Stapler",
  "Tape",
  "Glue",
  "Scissors",
  "Paperclip",
  "Binder",
  "Envelope",
  "Stamp",
  "Postcard",
  "Calendar",
  "Diary",
  "Agenda",
  "Planner",
];
main.appendChild(wordContainer);
wordContainer.style = "display: flex; justify-content: center";
document.getElementById("startButton").addEventListener("click", startGame);

//#endregion

//reset everything to it's default state.
function resetGame() {
  guessedLetters = [];
  document.body.style.backgroundImage = "linear-gradient(rgb(20, 147, 250), rgb(244, 250, 168)";
  looped = false;
  correctLetters = 0;
  wrongGuesses = 0;
  userInput.value = "";
  letterButtons = document.querySelectorAll("#alphabet-container>button");
  document.getElementById("resultMessage").textContent = "";
  wordContainer.innerHTML = "";
  secretWord = wordList[Math.floor(Math.random() * wordList.length)];
  loseWord = secretWord;
  secretWord = secretWord.toUpperCase();
  secretWord = secretWord.split("");
  document.body.style.backgroundColor = "white";
  document.getElementById("userInput").addEventListener("keyup", onEnter);

  //reset style
  letterButtons.forEach((button) => {
    button.className = "letterButton";

    button.addEventListener("click", checkButton);
  });

  bodyparts.forEach((part) => {
    part.style.opacity = 0;
  });

  //
  secretWord.forEach((letter) => {
    letterBox = document.createElement("p");
    wordContainer.appendChild(letterBox);
    letterBox.textContent = letter;
    letterBox.style =
      "width: .5rem; margin-left: .5rem; color: rgba(0, 0, 0, 0); text-decoration: underline 1px black ";
  });
  console.log(secretWord);
}

function startGame() {
  resetGame();
}

function handleInput(input) {
  input = input.toUpperCase();
  guessedLetters.push(input);
  checkButton({ target: { innerText: input } });
  console.log(guessedLetters);
}

function onEnter(event) {
  if (event.key === "Enter") {
    let input = document.getElementById("userInput").value;
    input = input.toUpperCase();

    letterButtons.forEach((button) => {
      if (button.innerText == input) {
        button.removeEventListener("click", checkButton);
        button.className = "letterButtonClicked";
      }
    });
    if (!guessedLetters.includes(input)) {
      handleInput(input);
      document.getElementById("userInput").value = "";
    }
  }
}

function checkButton(event) {
  let button = event.target;
  let chosenLetter = button.innerText;
  button.className = "letterButtonClicked";

  if (event.target.tagName === "BUTTON") {
    button.removeEventListener("click", checkButton);
  }

  if (!looped) {
    let correct = false;
    let index = 0;
    secretWord.forEach((letter) => {
      if (letter === chosenLetter) {
        correctLetters++;
        console.log("Correct letters: ", correctLetters);
        correct = true;

        let letterBox = wordContainer.getElementsByTagName("p")[index];
        letterBox.style.color = "rgba(0, 0, 0, 1)";
      }
      if (correctLetters == secretWord.length) {
        console.log("win");
        document.body.style.backgroundImage = "linear-gradient(rgb(0, 255, 0), rgb(244, 250, 168))";
        win = true;
        document.getElementById("resultMessage").textContent =
          "You saved the man! \nPress the 'reset game' button to play again!";
        letterButtons.forEach((button) => {
          button.removeEventListener("click", checkButton);
        });
        document.getElementById("userInput").removeEventListener("keyup", onEnter);
      }
      index++;
    });

    if (!correct) {
      wrongGuesses++;
      console.log("Wrong guesses: ", wrongGuesses);
    }

    looped = true;
    hangHim(); //handles the unveiling of the hanging.
    return (looped = false), (correct = false);
  }
}

function hangHim() {
  switch (wrongGuesses) {
    case 1:
      bodyparts[0].style.opacity = 1;
      break;
    case 2:
      bodyparts[4].style.opacity = 1;
      break;
    case 3:
      bodyparts[3].style.opacity = 1;
      break;
    case 4:
      bodyparts[2].style.opacity = 1;
      break;
    case 5:
      bodyparts[1].style.opacity = 1;
      console.log("The man was hanged");
      document.getElementById("resultMessage").textContent = "The man was hanged, you lost. The word was " + loseWord;
      lost = true;
      document.body.style.backgroundImage = "linear-gradient(rgb(255, 0, 0), rgb(244, 250, 168))";
      letterButtons.forEach((button) => {
        button.removeEventListener("click", checkButton);
      });
      document.getElementById("userInput").removeEventListener("keyup", onEnter);

      break;
  }
}

let alphabet = [];

for (let i = 65; i <= 90; i++) {
  alphabet.push(String.fromCharCode(i));
}

let alphabetContainer = document.getElementById("alphabet-container");
let userInput = document.createElement("div");
// style input displya

alphabetContainer.appendChild(userInput);

for (let j = 0; j < alphabet.length; j++) {
  const letter = alphabet[j];
  letterElement = document.createElement("button");

  letterElement.textContent = letter;
  letterElement.className = "letterButton";

  alphabetContainer.appendChild(letterElement);
}

document.getElementById("resetButton").addEventListener("click", resetGame);
