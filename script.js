

let hangedManSVG = document.querySelector("svg");
let bodyparts = hangedManSVG.querySelectorAll("path");
let looped = false;
let correctLetters = 0;
let win = false;
let wordContainer = document.createElement("div");
let main = document.querySelector("main");
let letterButtons = [];
let wrongGuesses = 0;
let secretWord;
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

function resetGame() {
  looped = false;
  correctLetters = 0;
  wrongGuesses = 0;
  userInput.value = '';
  letterButtons = document.querySelectorAll("#alphabet-container>button");
  letterButtons.forEach((button) => {
  //reset style 
  button.style.backgroundColor = '';
  button.style.margin = '';
  button.style.border = '';
  button.style.fontWeight = '';
  button.style.height = '';
  button.style.width = '';
  button.removeEventListener("click", checkButton)
  button.addEventListener("click", checkButton);
  });

  bodyparts.forEach((part) => {
    part.style.opacity = 0;
  });

  wordContainer.innerHTML = '';

  secretWord = wordList[Math.floor(Math.random() * wordList.length)];
  secretWord = secretWord.toUpperCase();
  secretWord = secretWord.split("")

  secretWord.forEach((letter) => {
    letterBox = document.createElement("p");
    wordContainer.appendChild(letterBox);
    letterBox.textContent = letter;
    letterBox.style =
      "width: .5rem; margin-left: .5rem; color: rgba(0, 0, 0, 0); text-decoration: underline 1px black ";
  });
  document.body.style.backgroundColor = "white";

}

function startGame() {
  resetGame();
  /*
  secretWord = wordList[Math.floor(Math.random() * wordList.length)];
  secretWord = secretWord.toUpperCase();
  secretWord = secretWord.split("");
  console.log(secretWord);

  //put the word on screen, but make letters invisible. Create underline.
  secretWord.forEach((letter) => {
    letterBox = document.createElement("p");
    wordContainer.appendChild(letterBox);
    letterBox.textContent = letter;
    letterBox.style =
      "width: .5rem; margin-left: .5rem; color: rgba(0, 0, 0, 0); text-decoration: underline 1px black ";
  });
  */
}

function checkButton(event) {
  let button = event.target;
  let chosenLetter = button.innerText;
  button.removeEventListener("click", checkButton);
  button.style =
    "background-color: gray; width: 2rem; height: 2rem; fontWeight: bold; border: black 1px solid; margin: .2rem";

  if (!looped) {
    //i to compare to the lenght of a word, only when "i == wordLenght" will guess go up. goes up wordLenght amount each guess otherwise.
    //let i = 0;
    let correct = false;
    console.log(secretWord)
    //Checks if the secretWord array has the clicked letter in it
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
        document.body.style.backgroundColor = "green";
        win = true;
        document.getElementById("resultMessage").textContent = "Congratulations! You win!";
      }
      index++;
    });

    //if (i === secretWord.length) {
    if (!correct) {
      wrongGuesses++;
      console.log("Wrong guesses: ", wrongGuesses);
    }

    looped = true;
    //}
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
      document.body.style.backgroundColor = "red";
      break;
  }
}
let alphabet = [];

for (let i = 65; i <= 90; i++) {
  alphabet.push(String.fromCharCode(i));
}

let alphabetContainer = document.getElementById("alphabet-container");
let userInput = document.createElement("input");
// style input displya
userInput.type = "text";
userInput.style.width = "200px"; 
userInput.style.padding = "10px";  
userInput.style.border = "1px solid #ccc";  
userInput.style.borderRadius = "5px";  
userInput.style.fontFamily = "Arial, sans-serif";  
userInput.style.fontSize = "16px";
userInput.type = "text";
alphabetContainer.appendChild(userInput);

for (let j = 0; j < alphabet.length; j++) {
  const letter = alphabet[j];
  let letterElement = document.createElement("button");

  letterElement.textContent = letter;
  letterElement.addEventListener("click", function () {
    userInput.value = letter;
  });

  alphabetContainer.appendChild(letterElement);
}

document.getElementById("resetButton").addEventListener("click", resetGame);
