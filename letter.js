// Constructor for guessed letters.

var Letter  = function(letter, guessed) {
    this.letter= letter;
    this.guess = false;

    // print out the checks if guess is correct or not
    this.printIt = function(){
        if(this.guess === true) {
            // return string
            return this.letter;
        }
        else {
            // return blank space
            return '_';
        }
    };

// Check the letter against the string to see if the guessed letter is correct.

this.letterCheck = function(guessedLetter){
    if(guessedLetter === letter) {
        this.guess = true;
    }
};

};