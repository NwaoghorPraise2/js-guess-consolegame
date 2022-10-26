
//Declearing Variables
let points = 0;
let level = 1;
let maxLevel = 10;
let rangeMaxValue = 2;
let checkCondition = true;
let userGuess = 0;

//Reusegable Functions
tryAgain = () => {
    console.log(`oops...,${username} you guessed wrong. Try Again\n`);
}



restart = () => {
    console.log(welcomeMessage);
    console.log("Let's do this again");
    points = 0;
    level = 1;
    rangeMaxValue = 2;
    username = prompt("Enter your name");
}


const welcomeMessage = "Welcome to Js Guessing Game. \n By Nwaoghor Praise for I4gxZuri Traning Cohort II 2022.\n I need you to follow the instuctions, thank you.\n";
console.log(welcomeMessage);
let username = prompt("Enter your name");

while (checkCondition) {
  if (username) {
    let randomNumber = Math.floor(Math.random() * rangeMaxValue + 1)
    console.log(`${username}, I have pick a number between 1 and ${rangeMaxValue}\n`);
    
    //Take User Guess
    userGuess = parseInt(prompt(`${username}, Try guessing this number`));

    //check if user guess is a number
    if (isNaN(userGuess)) {
      console.log(`${username}, you enter an alphabet. Please enter a number`);
      userGuess = parseInt(prompt(`${username}, Try and guess this number`));
    } else if (randomNumber === userGuess) {
      rangeMaxValue++;
      points++;
      level++;
      console.log(`${username}, you just earned 1 point and you are now in level: ${level}.\nTotal Point: ${points}`);
    } else if (rangeMaxValue === maxLevel) {
      console.log (`${username}, Congratulations... You nailed it`);
      console.clear();
      restart();
    } else {
      tryAgain();
    } 
  }
}