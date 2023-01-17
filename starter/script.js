// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

let pwdLength = prompt("Enter the length of your password?");

let UCchoice = [];
let LCchoice = [];
let SCchoice = [];
let nCchoice = [];

  for (var i = 0; i < pwdLength/4; i++) {
    // Randomly chooses a choice from the options array. This is the Computer's guess.
  UCchoice += upperCasedCharacters[Math.floor(Math.random() * upperCasedCharacters.length)];
  LCchoice += lowerCasedCharacters[Math.floor(Math.random() * lowerCasedCharacters.length)];
  SCchoice += specialCharacters[Math.floor(Math.random() * specialCharacters.length)]
  nCchoice += numericCharacters[Math.floor(Math.random() * numericCharacters.length)]
console.log(UCchoice);
console.log("***************");
console.log(LCchoice);
console.log("*******************");
console.log(SCchoice);
console.log("***************");
console.log(nCchoice);
console.log("***************");

}
let password = UCchoice.concat(LCchoice, SCchoice, nCchoice);
console.log(password);

// Function to prompt user for password options
function getPasswordOptions() {
// pseudocode prompt alert
// establish length -- create array of that length or use the length as the number for the FOR loop


// do you want special characters?
// upper case, lower case etc.
// this should return the options the user will choose
// length, symbols, numbers, lowercase, uppercase
}

// Function for getting a random element from an array
function getRandom(arr) {
// should return a random element from any of the arrays
// in Math.random() add the length of the array chosen; 

for (i = 0; i < arr.length; i++) {
Math.random( );
}
}

// Function to generate password with user input
function generatePassword() {
  // concatenate all the random elements from the above arrays, run loops etc
  // your logic goes here

return password;
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);