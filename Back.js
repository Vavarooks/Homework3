// Assignment Code

var generateBtn = document.querySelector("#generate");

// generateBtn.addEventListener("click", writePassword);

// Write password to the #password input


// function writePassword() {
//   let password = generatePassword();
//   let passwordText = document.querySelector("#password");
//   passwordText.value = password;
// }


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



// function myFunk() {

  

// }


// document.getElementById(`myTextarea`).oninvalid


// let passWord = confirm("Do you want to generate a password?");

// if (passWord) {
//   alert(generatePassword(8));
// }
// else {
//   console.log(generatePassword(8));
// }

