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
var checked= [];
var chooseWord;
var letter;


// Words to guess
var marvelWords = ['thor', 'black panther', 'iron man', 'vision', 'ant man', 'hawkeye', 'hulk' ];




// Functions

var gameWelcome = function(){
clear();

console.log(`
HH   HH   AAA   NN   NN   GGGG  MM    MM   AAA   NN   NN 
HH   HH  AAAAA  NNN  NN  GG  GG MMM  MMM  AAAAA  NNN  NN 
HHHHHHH AA   AA NN N NN GG      MM MM MM AA   AA NN N NN 
HH   HH AAAAAAA NN  NNN GG   GG MM    MM AAAAAAA NN  NNN 
HH   HH AA   AA NN   NN  GGGGGG MM    MM AA   AA NN   NN /n/n`);

}






// Call functions
gameWelcome();



