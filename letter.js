// Constructor for guessed letters.
// Mad props to my boy aaron wyand for helping me out with this step and connecting the dots. 

var Letter  = function(letter, guessed) {
    this.letter= letter;
    this.guessed = false;

    // print out the checks if guess is correct or not
    this.printIt = function(){
        if(this.guessed === true) {
            // return string
            return this.letter;
        }
        else {
            // return blank space
            return '_';
        }
    };

// Check the letter against the string to see if the guessed letter is correct.

this.letterCheck = function(guess){
    if(guess === this.letter) {
        this.guessed = true;
    }
};

};

module.exports = Letter;