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


  

  
//CALLING THE FUNCTION TO START THE QUESTIONAIRE
 

// Function for getting a random element from an array

function getRandom(arr) {

  // get random index value
  const randomIndex = Math.floor(Math.random() * arr.length);

  // get random item
  const item = arr[randomIndex];

  return item;
  }

  //creating a variable for a random lower case letter
  let randlower = getRandom(lowerCasedCharacters)
  

//creating a variable for a random upper case letter
  let randupper = getRandom(upperCasedCharacters)
  

  //creating a variable for a random number
  let randnumber = getRandom(numericCharacters)
 

  //creating a variable for a random special character
  let randspecial = getRandom(specialCharacters)
  



// Function to generate password with user input
//firstly we generate a number between a maximum and a minimum
function generateRandom(min = 0, max = 100) {

  // we use this to find the difference between the max and min
  let difference = max - min;

  // we now generate a random number between 0 and 1  
  let rand = Math.random();

  // then we multiply that number by the difference and round down
  rand = Math.floor( rand * difference);

  // add with min value 
  rand = rand + min;

  return rand;
}


//creating a function to randomly shuffle my password after generating
  function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }



function generatePassword() {

  //creating an array with numbers 10-64
  let running = true;
  let response1 = ''
  while(running===true){
    var choices = Array.from({length: 55}, (_, i) => i + 10)
  
    response1= prompt ("How many characters would you like your password to have?", "Please type a value betweeen 10 and 64")
     response1=parseInt(response1)
    if (choices.indexOf(response1)===-1) {

        // allowing the user to exit by pressing cancel

        if(confirm("Not a Valid Choice! Please try again!")) {
          continue
        } else {
          break
        }
        
    }else {
      alert( "You have chosen: " + response1)

    }
    break
  }

//lower case letter confirm box
    const response2= confirm (" Would you like to use lower-case letters? Please press cancel if not (a, b, c etc...)") 
    if (response2){
      var lower = true
    }else{
      var lower = false
    }


//upper case letter confirm box    
    const response3 = confirm( "Would you like to use upper-case letters? Please press cancel if not (A, B, C etc...)")
    if (response3){
      var upper= true
    }else {
      var upper = false
    }

// numbers confirm box    

    const response4 = confirm( "Would you like to use numbers? Please press cancel if not (1, 2, 3 etc...)")
    if (response4){
      var number= true
    }else {
      var number = false
    }

//special charachters confirm box    
    const response5= confirm("Would you like to use special characters in your password? Please press cancel if not ( @, %, + etc..)")
    if (response5) { 
      var special =true
    } else{ 
      var special =false
    
    }

//adding up all of the number of pools to see how many we have. This is to see what we need to subtract from the length to get a maximum value
let numberOfPools =0

  if (lower==true) {
    numberOfPools=numberOfPools+1
  }
  if (upper==true) {
    numberOfPools=numberOfPools+1
  }
  if (number==true) {
    numberOfPools=numberOfPools+1
  }
  if (special==true) {
    numberOfPools=numberOfPools+1
  }




//This is to call the random number generating function if the option has been selected

let NumberofElementsFromLower=0
let NumberofElementsFromUpper=0
let NumberofElementsFromSpecial=0
let NumberofElementsFromNumber=0


  if (lower===true) {
   
     NumberofElementsFromLower= generateRandom(1,response1-numberOfPools+1)
  }
  if (upper===true) {
    NumberofElementsFromUpper= generateRandom(1,response1-numberOfPools-NumberofElementsFromLower)
  }
  if (number===true) {
     NumberofElementsFromNumber= generateRandom(1,response1-numberOfPools-NumberofElementsFromLower-NumberofElementsFromUpper)
  }
  if (special===true) {
   NumberofElementsFromSpecial= response1 - NumberofElementsFromNumber - NumberofElementsFromUpper-NumberofElementsFromLower
  }

  let password=[]
  for( let i=0; i<NumberofElementsFromLower; i++){
    password.push(getRandom(lowerCasedCharacters))
  }
  for( let i=0; i<NumberofElementsFromUpper; i++){
    password.push(getRandom(upperCasedCharacters))
  }
  for( let i=0; i<NumberofElementsFromNumber; i++){
    password.push(getRandom(numericCharacters))
  }
  for( let i=0; i<NumberofElementsFromSpecial; i++){
    password.push(getRandom(specialCharacters))
  }
  console.log(password)
  
  shuffle(password)
  console.log(password)

  return password.join('')
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