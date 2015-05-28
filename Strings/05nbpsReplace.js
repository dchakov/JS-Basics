//Problem 5. nbsp
//Write a function that replaces non breaking white-spaces in a text with  &nbsp ;


function nbspReplace(text) {
    var resultText = '';
    for (var i = 0; i < text.length; i++) {
        if (text[i] === ' ') {
            resultText += '&nbsp;';
        }
        else {
            resultText += text[i];
        }
    }
    return resultText;
}

var textReplace = 'Write a function that replaces non breaking white-spaces in a text.';

function nbspFunction() {
    console.log(textReplace);
    console.log(nbspReplace(textReplace));
}