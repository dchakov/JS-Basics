//Problem 3. Sub-string in text
//Write a JavaScript function that finds how many times a substring is contained in a given text (perform case insensitive search).


function checkText(string, target) {
    var counter = 0;
    var index = -1;
    var stringInsence = '';

    console.log('Perform case insensitive search:')
    for (var i = 0; i < string.length; i++) {
        stringInsence += string[i].toLowerCase();
    }
    console.log(stringInsence);

    while (true) {
        index = stringInsence.indexOf(target.toLowerCase(), index + 1);
        if (index == -1) {
            break;
        }
        else {
            counter++;
        }
    }
    return counter;
}

var targetText = "We are living in an yellow submarine. We don't have anything else. inside the submarine is very tight. So we are drinking all the day. We will move out of it in 5 days.";
var target = "in";

function substringInText() {

    console.log('The result is:' + checkText(targetText, target));
}