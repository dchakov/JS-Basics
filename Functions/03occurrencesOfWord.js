//Problem 3. Occurrences of word
//Write a function that finds all the occurrences of word in a text.
//The search can be case sensitive or case insensitive.
//Use function overloading.

var text = "We are living in in an yellow submarine We don't have anything else In side the submarine is very tight So we are drinking all the day We will move out of it in 5 days ";
var word = "in";

function wordsCounter(input, sub, isCaseSensitive) {

    function getWordCaseSensitive(input, sub) {
        var counter = 0;
        var wordsArray = input.split(' ');
        for (var i = 0; i < wordsArray.length; i++) {
            if (wordsArray[i] === sub) {
                counter += 1;
            }
        }
        return counter;
    }

    function getWordCaseInsensitive(input, sub) {
        var counter = 0;
        var wordsArray = input.split(' ');
        for (var i = 0; i < wordsArray.length; i++) {
            if (wordsArray[i].toLowerCase() === sub.toLowerCase()) {
                counter += 1;
            }
        }
        return counter;
    }
    switch (arguments.length) {
        case 2:
            return getWordCaseInsensitive(input, sub);
        case 3:
            return isCaseSensitive ? getWordCaseSensitive(input, sub) : getWordCaseInsensitive(input, sub);

    }
}

function occurrencesOfWord() {
    console.log(wordsCounter(text, word, true));
}
