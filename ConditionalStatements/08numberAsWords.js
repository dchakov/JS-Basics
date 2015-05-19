//Problem 8. Number as words
//Write a script that converts a number in the range [0…999] to words, corresponding to its English pronunciation.

function funcNumber() {
    var number = document.getElementById("number").value * 1;

    var firstLeftToRight = Math.floor(number / 100) % 10;
    var secondLeftTpRight = Math.floor(number / 10) % 10;
    var thirdLeftToRight = number % 10;

    var numbersZeroTwenty = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten"
    , "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen", "Twenty"];

    var numbersTwentyHundred = ["Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];

    
    if ((number >= 0) && (number <= 20)) {
        console.log(numbersZeroTwenty[number]);
    }
    else if ((number > 20) && (number <= 99)) {
        console.log(numbersTwentyHundred[secondLeftTpRight - 2] + " " + numbersZeroTwenty[thirdLeftToRight].toLowerCase());
    }
    else if ((number > 99) && (number <= 999)) {
        if (secondLeftTpRight == 0 && thirdLeftToRight == 0) {
            console.log(numbersZeroTwenty[firstLeftToRight] + " hundred");
        }
        else if ((secondLeftTpRight * 10 + thirdLeftToRight) > 0 && (secondLeftTpRight * 10 + thirdLeftToRight) <= 20) {
            console.log(numbersZeroTwenty[firstLeftToRight] + " hundred and " + numbersZeroTwenty[secondLeftTpRight * 10 + thirdLeftToRight].toLowerCase());
        }
        else {
            console.log(numbersZeroTwenty[firstLeftToRight] + " hundred and " + numbersTwentyHundred[secondLeftTpRight - 2].toLowerCase() + " " + numbersZeroTwenty[thirdLeftToRight].toLowerCase());
        }
    }
    else {
        console.log(number + ' ' + " is not a in the range");
    }
}
