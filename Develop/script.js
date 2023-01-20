// Assignment Code


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var upperCase= 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
var lowerCase= 'abcdefghijklmnopqrstuvwxyz'
var symbols= '!@#$%^&*()_+='
var numbers= '0123456789'



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
