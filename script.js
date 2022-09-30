alert("Welcome to the special password generator! For create a new password please click to the 'Generate Password' button.");

// Assignment Code
var generateBtn = document.querySelector("#generate");

generatePassword();

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


var passwordLength;

var uppercaseSelection = false;
var lowercaseSelection = false;
var numericSelection = false;
var specialSelection = false;

const uppercaseCharacter = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const randomUppercaseCharacter = uppercaseCharacter[Math.floor(Math.random() * uppercaseCharacter.length)];

const lowercaseCharacter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const randomLowercaseCharacter = lowercaseCharacter[Math.floor(Math.random() * lowercaseCharacter.length)];

const numericCharacter = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const randomNumericCharacter = numericCharacter[Math.floor(Math.random() * numericCharacter.length)];

const specialCharacter = ["!", "#", "$", "%", "&", "'", "*", "-", ".", "/", ":", ";", "<", ">", "=", "?", "@", "~", "^", "|"];
const randomSpecialCharacter = specialCharacter[Math.floor(Math.random() * specialCharacter.length)];



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



function selectPasswordLength() {
  passwordLength = prompt("Choose a number between '8' and '128' ");
  // console.log(passwordLength);
  if (passwordLength < 8 || passwordLength > 128) {
    alert("INVALID SELECTION! Please select a number between '8' and '128");
    selectPasswordLength();
  }
  //console.log(passwordLength);
}
