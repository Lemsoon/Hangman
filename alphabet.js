//function for the alphabets (keyboard)
let alphabet = [];

//ASCII values of A= 65 and Z=90
for (let i = 65; i <= 90; i++) {
  alphabet.push(String.fromCharCode(i));
}

let alphabetContainer = document.getElementById("alphabet-container");

// adding each letter to keyboard-container
for (let j = 0; j < alphabet.length; j++) {
  let letterElement = document.createElement("button");
  letterElement.textContent = alphabet[j];
  alphabetContainer.appendChild(letterElement);
}
