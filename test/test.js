let wheelOptions = [1000, 500, 800, 3000, 2000, "bankrupt", "loseTurn"];
let message = "";
let word = ["B", "O", "O", "K"];

const spinButton = document.getElementById("spinButton");
const submitButton = document.getElementById("submitButton");
const displayResult = document.getElementById("displayResult");
const displayMessage = document.getElementById("displayMessage");
const input = document.getElementById("yourGuess");


function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
  //The maximum is exclusive and the minimum is inclusive
}

const spin = (options) => {
  const result = options[getRandomInt(0, options.length)];
  if (result === "bankrupt") bankrupt();
  else if (result === "loseTurn") loseTurn();
  else winMoney(result);
  return result;
};

const winMoney = (value) => {
	// console.log(value);
  message = `you are about to win ${value} if u can guess correctly`;
  // get value from userInput
  // call checkMatch(userInput);
  
};

const checkMatch = (userInput) => {
	userInput = userInput.toUpperCase();
	if (userInput.length < 1) {
  	console.log("please enter a valid input");
    // probably need some input validation here as well (punctuation, space...)
  }
  else if (userInput.length === 1) {
    // compare userInput char to each element in word array ["B", "O", "O", "K"]
    
    // case 1: no match
    if (!word.includes(userInput)) {
    	console.log("wrong guess");
      // call update_failed_guess() function, add to FAIL LIST
      // call next_player() function
    }
    
    // case 2: match 1 or more characters, display the result with the index
    if (word.includes(userInput)) {
    	console.log("correct, checking the characters' indexes...");
      // display WORD with their index?
      // if all the characters are display, then call round_over() function
      // call increase_wallet() function (make sure increase wallet * number of chars)
      // let user know they can spin again => spin()
    }
  } else {
  	// compare the WHOLE phrase
    if (userInput === word) {
    	return "Correct!! You won this round.";
    } else {
    	console.log("Sorry, the phrase doesn't match. You lose your turn.")
      // call next_player() function
    }
  }
};

const bankrupt = () => {
  message = 'you went bankrupt';
  // call clear_wallet() function
  // call next_player() function
};

const loseTurn = () => {
  message = "you lost your turn";
  // call next_player() function
};


spinButton.addEventListener("click", () => {
  displayResult.innerHTML = "";
  displayMessage.innerHTML = "";
  const result = spin(wheelOptions);
 
  displayResult.innerHTML = result;
  displayMessage.innerHTML = message;
});

submitButton.addEventListener("click", () => {
	const yourGuess = input.value;
  checkMatch(yourGuess);
});
