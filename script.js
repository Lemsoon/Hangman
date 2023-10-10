document.getElementById("guessButton").addEventListener("click", guess);
document.getElementById("startButton").addEventListener("click", startGame);
let wrongGuesses = 0;
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
let chosenWord;

console.log("There are ", wordList.length, " words to choose from");

function startGame() {
  let randomNumber = Math.floor(Math.random() * wordList.length);
  chosenWord = wordList[randomNumber];
  console.log("The chosen word is: ", chosenWord);
}

function guess() {
  let userInput = document.getElementById("userInput");

  if (userInput.value === "") {
    return console.log("You didnt enter a letter.");
  } else if (chosenWord.includes(userInput.value)) {
    console.log("The word ", chosenWord, " has ", userInput.value, " in it.");
    let chosenWordArray = chosenWord.split("");
    let i = 0;
    chosenWordArray.forEach((letter) => {
      if (userInput.value == letter) {
        console.log("The word as ", userInput.value, " at spot", i + 1);
      }
      i++;
    });
  } else {
    console.log(chosenWord, "does not have ", userInput.value, " in it.");
  }
}

//function for the alphabets (keyboard)
let alphabet = [];

//ASCII values of A= 65 and Z=90
for (let i = 65; i <= 90; i++) {
  alphabet.push(String.fromCharCode(i));
}

let keyboardContainer = document.querySelector("alphabet-container");

// adding each letter to keyboard-container
for (let j = 0; j < alphabet.length; j++) {
  letterElement.textContent = alphabet[j];
  keyboardContainer.appendChild(letterElemet);
}

console.log(keyboardContainer);
