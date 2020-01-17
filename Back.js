// Assignment Code

var generateBtn = document.querySelector("#generate");

var lowerBtn = document.querySelector("#lowerBox");

var upperBtn = document.querySelector("#upperBox");

var numbersBtn = document.querySelector("#numbersBox");

var symbolBtn = document.querySelector("#symbolBox");


// generateBtn.addEventListener("click", writePassword);

// Write password to the #password input



function generatePassword(length) {
  var result           = '';
  var characters       = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!"#$%&'()*+,-./:;<=>?@[]^_{|}~`;
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
     result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;

}


generateBtn.addEventListener("click", function()

{
  document.getElementById("password").innerHTML =generatePassword(8)
});
