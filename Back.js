// Assignment Code

let generateBtn = document.querySelector("#generate");

let lowerBtn = document.querySelector("#lowerBox").value;

let upperBtn = document.querySelector("#upperBox").value;

let numbersBtn = document.querySelector("#numbersBox").value;

let symbolBtn = document.querySelector("#symbolsBox").value;


// generateBtn.addEventListener("click", writePassword);

// Write password to the #password input


let message = prompt("How long would you like the password?");
let messageLength = parseInt(message);


function generatePassword() {
  let result           = '';
  let finish = '';
  const characters       = `ABCDEFGHIJKLMNOPQRSTUVWXYZ`;
  const lowerCharacters = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789"
const symbols = `!#$%&()*+-/<=>?@[]^_{|}~`;

debugger

if (lowerBtn===true) {
result += lowerCharacters;
console.log(result);
}

if (upperBtn===true) {
result += characters;
console.log(result);
}

if (numbersBtn===true) {
result += numbers;
console.log(result);
}

if (symbolBtn===true) {
result += symbols;
console.log(result);
}


var charactersLength = result.length;
 for ( var i = 0; i < messageLength; i++ ) {
     finish += result.charAt(Math.floor(Math.random() * charactersLength));
  }
  return finish;
 
}

// document.getElementById('myTextarea').value = '';


generateBtn.addEventListener("click", function() {

  let final = generatePassword()
  document.getElementById("password").innerHTML = final

alert(final);
} );




// {
//   document.getElementById("password").innerHTML = generatePassword()
// });
