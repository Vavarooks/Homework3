
const generateBtn = document.querySelector("#generate");

const lowerBtn = document.querySelector("#lowerBox");

const upperBtn = document.querySelector("#upperBox");

const numbersBtn = document.querySelector("#numbersBox");

const symbolBtn = document.querySelector("#symbolsBox");

const message = document.querySelector("#passwordLength");

let messageLength;

function generatePassword() {
  let result = '';
  let finish = '';
  const characters = `ABCDEFGHIJKLMNOPQRSTUVWXYZ`;
  const lowerCharacters = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789"
  const symbols = `!#$%&()*+-/<=>?@[]^_{|}~`;
messageLength = message.value;

  if (lowerBtn.checked === true) {
    result += lowerCharacters;
    console.log(result);
  }

  if (upperBtn.checked === true) {
    result += characters;
    console.log(result);
  }

  if (numbersBtn.checked === true) {
    result += numbers;
    console.log(result);
  }

  if (symbolBtn.checked === true) {
    result += symbols;
    console.log(result);
  }


  var charactersLength = result.length;
  for (var i = 0; i < messageLength; i++) {
    finish += result.charAt(Math.floor(Math.random() * charactersLength));
  }
  return finish;

}

generateBtn.addEventListener("click", function () {

  let final = generatePassword()
  document.getElementById("password").innerHTML = final

});
