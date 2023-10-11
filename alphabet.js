//function for the alphabets (keyboard)
let alphabet = [];

//ASCII values of A= 65 and Z=90
for (let i = 65; i <= 90; i++) {
  alphabet.push(String.fromCharCode(i));
}

const alphabetContainer = document.getElementById("alphabet-container");

const useInput = document.getElementById("usersInput");

// adding each letter to keyboard-container
for (let j = 0; j < alphabet.length; j++) {
    const letter = alphabet[j];
    let letterElement = document.createElement("button");

    letterElement.textContent = letter; 


    letterElement.addEventListener("click", function(){
        useInput.value = letter; 
    })

  alphabetContainer.appendChild(letterElement);
}
