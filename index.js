// Var sand requires

var inquirer = require('inquirer');
var Word  = require('./Word.js');
var clear = require('clear');
// Global vars
var wins = 0;
var losses = 0;
var turns;
var randomWord = [];
var guesses;
var checked = [];
var chooseWord;
var letter;

var chosenWords;
var chosenWord;
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
        choises: ['Marvel Cinematic Universe', 'Star Wars']
        }
    ])


}

// call welecome function
gameWelcome();



