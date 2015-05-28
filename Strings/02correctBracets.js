//Problem 2. Correct brackets• Write a JavaScript function to check if in a given expression the brackets are put correctly.
//Example of correct expression:  ((a+b)/5-d) . Example of incorrect expression:  )(a+b)) .

function checkExpression(string) {
    var counter = 0;
    var isCorrect = true;
    for (var i = 0; i < string.length; i++) {
        if (string[i] === '(') {
            counter++;
        }
        else if (string[i] === ')') {
            counter--;
        }
        if (counter < 0) {
            isCorrect = false;
            break;
        }
    }
    if (counter !== 0) {
        isCorrect = false;
    }
    return isCorrect;
}

//var expression = '((a+b)/5-d)';
//var expression = ')(a+b))';
var expression = '((a+b)';

function correctBracets() {
    console.log('Correct expression:' + checkExpression(expression));
}