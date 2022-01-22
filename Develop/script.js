// Assignment Code
var generateBtn = document.querySelector("#generate");
// Character string variable definitions
var LC = "abcdefghijklmnopqrstuvwxyz"
var UC = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var Num = "0123456789"
var Spec = "!@#$%^&*()+=:;./?<>~{}[]"
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var password = "";
  var actualPassword = "";
   var char = prompt("How many characters would you like?");
    // prompts for which password characters to include and how many
    if (isNaN(char)) {
      alert("Please enter a number!")
      return;
    }

    if (char < 8) {
      alert("You need at least 8 characters!"); 
      return;
    }
    else if (char > 128) {
      alert("Too many characters!");
      return;
    }

    var length = char;
    
    var confirmLC = confirm("Would you like lowercase letters?");

    var confirmUC = confirm("Would you like uppercase letters?");

    var confirmNum = confirm("Would you like numbers?");

    var confirmSpec = confirm("Would you like special characters?")
    // end prompts

    // construct character string
    if (confirmLC) {
      password = password + LC;
    }

    if (confirmUC) {
      password = password + UC;
    }

    if (confirmNum) {
      password = password + Num;
    }

    if (confirmSpec) {
      password = password + Spec;
    }

    if (!confirmLC && !confirmUC && !confirmNum & !confirmSpec) {
      alert("You must choose at least one character type!");
      generatePassword();
    }
    // end character string construction
    
    //set password length and randomize characters
    for (var index = 0; index < length; index++) {
    var randomIndex = Math.floor(Math.random() * password.length);
    actualPassword += password.charAt(randomIndex);
    }
  return actualPassword
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
