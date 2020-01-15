// Assignment Code

var generateBtn = document.querySelector("#generate");


// Write password to the #password input


function makeid(length) {
  var result           = '';
  var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
     result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}


let pass = confirm("Do you want to generate a password?");

if (pass) {
  alert(makeid(8));
}
else {
  console.log(makeid(8));
}


// function myFunction() {
//   var x = document.getElementById("password").value;
//   document.getElementById("demo").innerHTML = x;
// }
