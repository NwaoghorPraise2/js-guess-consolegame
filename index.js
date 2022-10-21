
//Declearing Variables
let points = 0;
let level = 1;
let maxLevel = 10;
let rangeMaxValue = 2;
let checkCondition = true;
let userGuess = 0;

let tryAgain = () => {
    console.log(`oops...,${username} you guessed wrong. \n Try Again`);
    userGuess = parseInt(`Pick a number between 1 and 
    ${rangeMaxValue}`)
}

let restart = () => {
    console.log("Let's do this again");
    points = 0;
    level = 1;
    rangeMaxValue = 2;
    username = prompt("Enter your name");
  
}


let username = prompt("Enter your name");
while (checkCondition) {
  if (username) {
// console.log(username);
    let randomNumber = Math.floor(Math.random() * rangeMaxValue + 1)
    console.log(`${username}, I have pick a number between 1 and ${rangeMaxValue}`);
    userGuess = parseInt(prompt(`${username}, Try guessing this number`));
    console.log(userGuess);
    console.log(`rand ${randomNumber}`)
    if (userGuess == NaN) {
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
     // checkCondition = false;
      restart();
      // console.clear();
      // checkCondition = false;
    } else {
      tryAgain();
    } 
    // if (newNumber == NaN) {
    // console.log(`${Username}, you enter an alphabet. Please enter a number`)

    // }

  }
}

// console.log(`${username} Lets get the game started`);

// tryAgain();
// let predictedNumber = parseInt(prompt('Enter a number')) ;
// let randomNumber = Math.floor(Math.random() * maxNumber) + 1;
// game();

// function game () {

// if(predictedNumber === randomNumber){
// //    stage =  stage + ;
//     // point ++;
//     // increasePointStage();
//     console.log(point);
//     // console.log(`Hurry 1 mark Earde Move to Stage 2 ${point} ${stage}`);
//     increase();
// } 








// increase();


// let points = 0;
// let level = 1;
// let maxlevel = 10;

// for (let i = 2; i < maxlevel; i++) {
//   let randomNumber = Math.floor(Math.random() * i) + 1;
//   // console.log(randomNumber)
//   let userGuess = parseInt(prompt(`Enter Number between 1 and ${i}`))

//   if (userGuess === NaN) {
//     let userGuess = parseInt(prompt(`Enter Number between`))

//   }

//   // console.log(randomNumber);
//   console.log(userGuess)
// }

