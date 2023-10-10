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

//function for the alphabets (keyboard)
let alphabet = []; 


//ASCII values of A= 65 and Z=90
for (let i = 65; i <= 90; i++) {
  alphabet.push(String.fromCharCode(i));  
}

let keyboardContainer = document.querySelector("keyboard-container");


// adding each letter to keyboard-container
for (let j = 0; j < alphabet.length; j++) {
  letterElemet.textContetn = alphabet[j];
  keyboardContainer.appendChild(letterElemet); 
}

console.log(keyboardContainer); 