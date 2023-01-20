// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var upperCase= 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
var lowerCase= 'abcdefghijklmnopqrstyuvwxyz'
var symbols= '!@#$%^&*()_+='
var numbers= '0123456789'

let userPassword = []

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


function generatePassword () {
  let passwordLength =  prompt('What is the Length of the Password? No less than 8 and No More 128 Characters ')
  if(passwordLength < 128 && passwordLength > 8){

    let upperChoice = confirm('Would you like uppercase?')

    let lowerChoice = confirm('Would you like lowercase?')
    
    let numberChoice = confirm('Would you like numbers?')
    
    let symbolsChoice = confirm('Would you like symbols?')




  }else{
    alert('Please and Kindly Follow the Instructions')
  }

  // return finalpassword
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
