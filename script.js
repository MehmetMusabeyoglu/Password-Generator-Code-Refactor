alert("Welcome to the special password generator! For create new password please click to the 'Generate Password'.");
// Assignment Code
var generateBtn = document.querySelector("#generate");

var characterTypes = [];
// console.log(characterTypes);
var yourPassword = [];
const uppercaseCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
// const randomUppercaseCharacters = uppercaseCharacter[Math.floor(Math.random() * uppercaseCharacter.length)];

const lowercaseCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// const randomLowercaseCharacters = lowercaseCharacter[Math.floor(Math.random() * lowercaseCharacter.length)];

const numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
// const randomNumericCharacters = numericCharacter[Math.floor(Math.random() * numericCharacter.length)];

const specialCharacters = ["!", "#", "$", "%", "&", "'", "*", "-", ".", "/", ":", ";", "<", ">", "=", "?", "@", "~", "^", "|"];
// const randomSpecialCharacters = specialCharacter[Math.floor(Math.random() * specialCharacter.length)];


// var characterTypes = ["a"];
// console.log(characterTypes);


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var passwordLength;
// console.log(typeof yourPassword);


// var userInput = new Array(userinputlength).fill(false);
var uppercaseSelection = false;
var lowercaseSelection = false;
var numericSelection = false;
var specialSelection = false;







function generatePassword() {
  selectPasswordLength();
  selectPasswordCharacterType();

  for (var i = 0; i < passwordLength; i++) {
    // console.log(i);
    yourPassword[i]= characterTypes[Math.floor(Math.random() * characterTypes.length)];
  }

  console.log(yourPassword);

}

function selectPasswordLength() {
  passwordLength = prompt("Choose a number between '8' and '128' ");
  // console.log(passwordLength);
  if (passwordLength < 8 || passwordLength > 128) {
    alert("INVALID SELECTION! Please select a number between '8' and '128");
    selectPasswordLength();
  }
  //console.log(passwordLength);
}

function selectPasswordCharacterType() {
  uppercaseSelection = confirm("Do you want uppercase characters in your password?");
  if (uppercaseSelection) {
    characterTypes=characterTypes.concat(uppercaseCharacters);
    // console.log(characterTypes);
  }
  lowercaseSelection = confirm("Do you want lowercase characters in your password?");
  if (lowercaseSelection) {
    characterTypes=characterTypes.concat(lowercaseCharacters);
    // console.log(characterTypes);
  }
  numericSelection = confirm("Do you want numeric characters in your password?");
  if (numericSelection) {
    characterTypes=characterTypes.concat(numericCharacters);
    // console.log(characterTypes);
  }
  specialSelection = confirm("Do you want special characters in your password?");
  if (specialSelection) {
    characterTypes=characterTypes.concat(specialCharacters);
    // console.log(characterTypes);
  }
  if (!(uppercaseSelection || lowercaseSelection || numericSelection || specialSelection)) {
    alert("INVALID SELECTION! Please select at least one option. ");
    selectPasswordCharacterType();
  }
  // console.log(uppercaseSelection);
  // console.log(lowercaseSelection);
  // console.log(numericSelection);
  // console.log(specialSelection);
  // console.log(!(uppercaseSelection || lowercaseSelection || numericSelection || speacialSelection));
}

// generatePassword();

// passwordText=generatePassword();
// document.getElementById("password")=alert(generatePassword());