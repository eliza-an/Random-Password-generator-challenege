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

// Function to prompt user for password options




function getPasswordOptions() {

  //
  let running = true;
  while(running===true){
    //var choices = Array.from({length: 65}, (_, i) => i + 10)
  
    //let answernumber= prompt ("How many characters would you like your password to have?", "Please type a value betweeen 10 and 64")
      
    //if (choices.indexOf(answernumber)===-1) {
   //     alert("Not a Valid Choice! Please pick a number between 10 and 64!") 
    //} else {
   //   alert( "You have chosen: " + answernumber)
   // }


    const response2= confirm("Would you like to use special characters in your password? Please press cancel if not ( @, %, + etc..)")
    if (response2) { 
      var special =true
     } else{ 
      var special =false
     
    }

    const response3= confirm (" Would you like to use lower-case letters? Please press cancel if not (a, b, c etc...)") 
    if (response3){
      var lower = true
    }else{
      var lower = false
    }

    const response4 = confirm( "Would you like to use upper-case letters? Please press cancel if not (A, B, C etc...)")
    if (response4){
      var upper= true
    }else {
      var upper = false
    }
  }
}




   

  //Here we will continue if the user selects a value between 10-64
  


  getPasswordOptions()

// Function for getting a random element from an array
function getRandom(arr) {

}

// Function to generate password with user input
function generatePassword() {

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