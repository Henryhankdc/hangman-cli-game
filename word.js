var Letter  = require('./Letter.js');

// create constructor to take letters in as the argument

var Word = function(word) {
    
    this.letters = [];
// for each word push it into the letters array
  for (i = 0; i < word.length; i++) {

    var newLetter = new Letter(word[i]);
    this.letters.push(newLetter);

  }

  this.lettersToString = function() {
//   get output to array to push to
    this.outputToArray = [];
    
    for (i = 0; i < this.letters.length; i++) {
      // Call Letter.output method which returns an underscore or letter
      var outputLetterToArray = this.letters[i].output();
   
      this.outputToArray.push(outputtedLetter);
    }
    // Log a string version of the outputArray
    console.log(this.outputToArray.join(" "));
    console.log("");
  };

//   run the guessed letter through the letterCheck function passing the letter that was guessed as argument.

this.guessLetter = function(guessedLetter) {
    // for each Letter object in array
    for (i = 0; i < this.letters.length; i++) {
      // pass guessedLetter to Letter.checkLetter
      this.letters[i].letterCheck(guessedLetter);
    }
  };

};

// Export
module.exports = Word;






