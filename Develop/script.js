// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
   var char = prompt("How many characters would you like?");

    if (char < 8) {
      alert("You need at least 8 characters!"); 
    }
    else if (char > 128) {
      alert("Too many characters!");
      
    }
    
    var confirmLC = confirm("Would you like lowercase letters?");

    var confirmUC = confirm("Would you like uppercase letters?");

    var confirmNum = confirm("Would you like numbers?");

    var confirmSpec = confirm("Would you like special characters?")
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
