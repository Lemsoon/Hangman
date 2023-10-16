//#region
let hangedManSVG = document.querySelector("svg");
let letterElement;
let bodyparts = hangedManSVG.querySelectorAll("path");
let looped = false;
let correctLetters = 0;
let win = false;
let lost = false;
let wordContainer = document.createElement("div");
let main = document.querySelector("main");
let letterButtons = [];
let wrongGuesses = 0;
let secretWord;
let guessedLetters = [];

const wordList = [
  "answer",
  "base",
  "began",
  "begin",
  "between",
  "book",
  "both",
  "car",
  "care",
  "carry",
  "children",
  "city",
  "close",
  "color",
  "country",
  "cover",
  "cross",
  "cut",
  "dont",
  "draw",
  "ease",
  "eat",
  "example",
  "eye",
  "face",
  "far",
  "farm",
  "feet",
  "few",
  "fish",
  "food",
  "found",
  "four",
  "friend",
  "got",
  "group",
  "grow",
  "hard",
  "head",
  "hear",
  "horse",
  "idea",
  "keep",
  "last",
  "late",
  "learn",
  "left",
  "let",
  "letter",
  "life",
  "main",
  "mark",
  "might",
  "mile",
  "mountain",
  "music",
  "never",
  "next",
  "night",
  "north",
  "often",
  "once",
  "open",
  "own",
  "page",
  "paper",
  "plant",
  "press",
  "real",
  "river",
  "room",
  "run",
  "saw",
  "school",
  "science",
  "sea",
  "second",
  "seem",
  "should",
  "stand",
  "start",
  "state",
  "still",
  "stop",
  "story",
  "study",
  "sun",
  "sure",
  "those",
  "thought",
  "together",
  "took",
  "tree",
  "until",
  "walk",
  "watch",
  "while",
  "white",
  "wood",
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
  "word",
  "Alphabet",
  "Semicolon",
  "Javascript",
  "Colors",
  "Animal",
  "Super",
  "Time",
  "Algorithm",
];
main.appendChild(wordContainer);
wordContainer.style = "display: flex; justify-content: center";
document.getElementById("startButton").addEventListener("click", startGame);

//#endregion

//reset everything to it's default state.
function resetGame() {
  document.body.style.backgroundImage = "linear-gradient(rgb(20, 147, 250), rgb(244, 250, 168)";
  looped = false;
  correctLetters = 0;
  wrongGuesses = 0;
  userInput.value = "";
  letterButtons = document.querySelectorAll("#alphabet-container>button");
  document.getElementById("resultMessage").textContent = "";
  wordContainer.innerHTML = "";
  secretWord = wordList[Math.floor(Math.random() * wordList.length)];
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
  // Convert the input to uppercase
  input = input.toUpperCase();
  guessedLetters.push(input); // Add the letter to the guessed letters array
  checkButton({ target: { innerText: input } }); // Call the checkButton function with the uppercase input
}

function onEnter(event) {
  if (event.key === "Enter") {
    // Get the input value
    const input = document.getElementById("userInput").value;
    handleInput(input);
    // Clear input box
    document.getElementById("userInput").value = "";
  }
}

function checkButton(event) {
  let button = event.target;
  let chosenLetter = button.innerText;
  button.className = "letterButtonClicked";

  //if event source is from button, remove event listener.
  if (event.target.tagName === "BUTTON") {
    button.removeEventListener("click", checkButton);
  }

  if (!looped) {
    //let i = 0;
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
        document.getElementById("resultMessage").textContent = "Congratulations! You win!";
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
      document.getElementById("resultMessage").textContent = "The man was hanged, you lost.";
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
