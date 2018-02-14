// Var and requires

var inquirer = require('inquirer');
var Word  = require('./Word.js');
var clear = require('clear');
// Global vars

var chosenWords;
var chosenWord;
var chosenWordObj;
var chosenCategory;
var lettersGuessed;
var lettersRemaining;
var guessesRemaining;
var wordsRemaining;


// Words to guess. two themes
var marvelHeroes = ['thor', 'blackpanther', 'ironman', 'vision', 'antman', 'hawkeye', 'hulk' ];
var starWars = ['luke', 'kyloren', 'deathstar', 'starkiller','droid', 'chewbacca' ];








// Functions

var gameWelcome = function(){
clear();

console.log(`
HH   HH   AAA   NN   NN   GGGG  MM    MM   AAA   NN   NN 
HH   HH  AAAAA  NNN  NN  GG  GG MMM  MMM  AAAAA  NNN  NN 
HHHHHHH AA   AA NN N NN GG      MM MM MM AA   AA NN N NN 
HH   HH AAAAAAA NN  NNN GG   GG MM    MM AAAAAAA NN  NNN 
HH   HH AA   AA NN   NN  GGGGGG MM    MM AA   AA NN   NN /n/n`);


pickCategory();

}

var pickCategory = function() {
    chosenWords = [];
    chosenCategory = '';

    // use inquire to ask user to pick category

    inquirer.prompt([
        {
        type:'list',
        name: 'category',
        message: "Choose the cateogry you would like to have the theme of the game be.",
        choices: ['Marvel Cinematic Universe', 'Star Wars']
        }
    ]).then(function(response){
        switch(response.category){
        case 'Marvel Cinematic Universe':
            chosenCategory = 'Marvel Cinematic Universe';
            chooseWord(marvelHeroes);
            break;
        case 'Star Wars':
            chosenCategory = 'Star Wars';
            chooseWord(starWars);
            break;
        }
    });
}

// Function to choose the word based on variable and switch statement
var chooseWord = function(category) {
    // grab some global vars from the top
    chosenWord = '';
    chosenWordObj = {};
    // head, body, arms(2), legs(2)
    guessesRemaining = 6;
    lettersGuessed = [];

    chosenWords = category.slice();
    var selectRandomWord = Math.floor(Math.random() * chosenWords.length);
    chosenWord = chosenWords[selectRandomWord];
    // use object variable with constructor
    chosenWordObj = new Word(chosenWord);
    chosenWords.splice(selectRandomWord, 1);
    wordsRemaining = chosenWords.length;
// fire user guess function after selected
    userGuess();

}

var userGuess = function(){
    // clear stuff from console.
    clear();
// Check remaining letters
    checkRemainingLetters();

    // logic to check the letters

    if(lettersRemaining === 0) {
        if(wordsRemaining === 0) {
            stopGame();
        }else {
            // start next round
            nextRound();
        } 
    }else if(guessesRemaining === 0) {
        // finish game
        gameOver();
    }else {
        console.log(`Category: ${chosenCategory}`);
        console.log(`Words Left in Category: ${wordsRemaining}`);
        console.log(`Letters Guessed: ${lettersGuessed.join('')}`);
        console.log(`Guesses Remaining: ${guessesRemaining}`);

        chosenWordObj.lettersToString();

        inquirer.prompt([
            {
            type:'input',
            message: 'type a letter to guess ',
            name: 'guess'
            }
        ]).then(function(response){
            // use regex to ensure string length for reference
            // https://www.sitepoint.com/using-regular-expressions-to-check-string-length/
            var regexCheck = /^[a-z]+$/i;
            
            if (response.guess.length === 1 && regexCheck.test(response.guess)) {

                var currentGuess = response.guess.toLowerCase();
                chosenWordObj.guessLetter(currentGuess);
                countLettersLeft(currentGuess);
                userGuess()

            }else {
                // tell user to enter only one word
                ruleReminder();
            }

        });
        
    }

};

var ruleReminder = function() {
    inquirer.prompt([
        {
          type: "confirm",
          message: "Only enter ONE letter. got it? Confirm to proceeed.",
          name: "confirm"
        }
      ]).then(function(response) {
        if (response.confirm === true) {
          // Call userGuess()
          userGuess();
        } else {
          ruleReminder();
        }
      });
}


// Count letter left in word
var countLettersLeft = function() {
    
  if (chosenWord.indexOf(chosenWordObj) === -1) {

    if (lettersGuessed.indexOf(chosenWordObj) === -1) {
      
      guessesRemaining--;
// push letter to letters guess array if there
      lettersGuessed.push(lettersGuessed);
    }
  }

}

// function to check remaning letters
var checkRemainingLetters = function() {
        lettersRemaining = 0;

        for (let i = 0; i < chosenWordObj.letters.length; i++) {
           if (chosenWordObj.letters[i].guessed === false) {
               lettersRemaining++;
           }
            
        }
}


var nextRound = function () {
    // Tell user they guessed correctly
  console.log("You win!\n");
  // Present user with options
  inquirer.prompt([
    {
      type: "list",
      name: "choice",
      message: "Time to make a choice.",
      choices: ["Keep playing?",  "Quit game?"]
    }
  ]).then(function(response) {
    // Switch logic
    switch (response.choice) {
      case "Keep playing?":
        chooseWord(chosenWord);
        break;
      case "Quit game?":
        // Call quitGame
        stopGame();
        break;
    }
  });
}

var gameOver = function() {
    console.log("No more guesses. Its all over.");
    console.log(`The correct answer was ${chosenWord}.\n`);
    // Play again prompt
    inquirer.prompt([
      {
        type: "list",
        name: "choice",
        message: "Please choose an action",
        choices: ["Play again", "Quit game"]
      }
    ]).then(function(response) {
      if (response.choice === "Play again") {
        // Clear console
        clear();
        // start over at choose category
        pickCategory();
      } else {
        //quit
        stopGame();
      }
    });
  }

  // quitGame function
var stopGame = function() {
    // Clear everything
    clear();
    console.log("See Ya later");
  }
  




// call welecome function
gameWelcome();



