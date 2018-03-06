//create an arrary of 90's cartoons//
const word = ["rugrats", "hey arnold", "catdog", "salior moon" ,"wild thornberrys" ,"rocket power" ];

//chose word randomly 
let randNum = Math.floor(Math.random() * word.length);
let choosenWord = word[randNum];
let lettersinWord = [];
let wrongWord = [];
let underScore = [];
let numBlanks = [];

//Game counters
let winCount = 0;
let lossCount = 0;
let guessesleft = 9;


startGame = () => {
    lettersinWord = choosenWord.split("");
    numBlanks = lettersinWord.length;

    // Reset
    guessesLeft = 9;
    wrongLetters = [];
    blanksAndSuccesses = [];

    //create underscores based on names of words
    for (let i = 0; i < choosenWord.length; i++) {
        underScore.push('_');
    }
    // Change HTML to reflect game round conditions
    document.getElementById("wordToGuess").innerHTML = blanksAndSuccesses.join("  ");
    document.getElementById("numGuesses").innerHTML = guessesLeft;
    document.getElementById("winCounter").innerHTML = winCount;
    document.getElementById("lossCounter").innerHTML = lossCount;


    /// Testing /// Debugging
    console.log(choosenWord);
    console.log(lettersinWord);
    console.log(numBlanks);
    console.log(blanksAndSuccesses);
}

checkLetters = (letter) => {
    // check if letter exists in the word or code

    var isLetterInWord = false;

    for (var i = 0; i < numBlanks; i++) {
        if (choosenWord[i] == letter) {
            isLetterInWord = true;

        }
    }


    // Check where in the word the letter exists, then populate blanksAndSuccesses array
    if (isLetterInWord) {
        for (var i = 0; i < numBlanks; i++) {
            if (choosenWord[i] == letter) {
                blanksAndSuccesses[i] = letter;
            }
        }

    }

    // Letter wasn't found
    else {
        wrongLetters.push(letter);
        guessesLeft--
    }

    /// Testing and debugging
    console.log(blanksAndSuccesses);
}

roundComplete = () => {
    console.log("Win Count: " + winCount + "| Loss Count: " + lossCount + " | Guesses Left " + guessesLeft);

    //Update the HTML to reflect the most recent count data
    document.getElementById("numGuesses").innerHTML = guessesLeft;
    document.getElementById("wordToGuess").innerHTML = blanksAndSuccesses.join("  ");
    document.getElementById("wrongGuesses").innerHTML = wrongLetters.join("  ");

    //Check if user won
    if (lettersinWord.toString() == blanksAndSuccesses.toString()) {
        winCount++;

        alert("You Win!");

        //Update the win counter in HTML
        document.getElementById("winCounter").innerHTML = winCount;

        startGame();
    }
    // Check if user lost
    else if (guessesLeft == 0) {
        lossCount++;
        alert("Not saying you're a loser, but you didn't win!");

        //Update the HTML
        document.getElementById("lossCounter").innerHTML = lossCount;

        startGame();
    }

}

//MAIN PROCESS 
//----------------------------------------------------------------------
// initates the code the first time

startGame();

//register key clicks 
document.onkeyup = function(event) {
    var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
    checkLetters(letterGuessed);
    roundComplete();

    ///testing /// debugging
    console.log(letterGuessed);
}