// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

console.log(getRandomInt(100000000));

function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;

  copyBtn.removeAttribute("disabled");
  copyBtn.focus();
}

function copyToClipboard() {
  // BONUS 
}

// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);

// BONUS EVENT LISTENER
