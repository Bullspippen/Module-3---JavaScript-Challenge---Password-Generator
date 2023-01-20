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

// Match Criteria
function generatePassword () {
  let passwordLength =  prompt('What is the Length of the Password? No less than 8 and No More 128 Characters ')
  if(passwordLength < 128 && passwordLength > 8){
    let upperChoice = confirm('Would you like Uppercase Characters?')
    if(upperChoice){
      userPassword.push(...upperCase)
    } else{
      alert('hello')
    }
    let lowerChoice = confirm('Would you like Lowercase Characters?')
    if(lowerChoice){
      userPassword.push(...lowerCase)
    }
    let numberChoice = confirm('Would you like Numbers?')
    if(numberChoice){
      userPassword.push(...numbers)
    }
    let symbolsChoice = confirm('Would you like Symbols?')
    if(symbols){
      userPassword.push(...symbols)
    }



  }else{
    alert('Please and Kindly Follow the Instructions')
  }
  console.log(userPassword)
  var password=''
  for (let i = 0; i < passwordLength; i++) {
    password+=userPassword[Math.floor(Math.random() * userPassword.length)]
  }
  console.log(password)
  
  return password
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
