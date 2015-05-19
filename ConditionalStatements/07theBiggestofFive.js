//Problem 7. The biggest of five numbers
//Write a script that finds the greatest of given 5 variables.
//Use nested if statements.

function funcBiggest5() {
    var firstNumber = document.getElementById("numA07").value * 1;
    var secondNumber = document.getElementById("numB07").value * 1;
    var thirdNumber = document.getElementById("numC07").value * 1;
    var fourthNumber = document.getElementById("numD07").value * 1;
    var fifthNumber = document.getElementById("numE07").value * 1;

    if (firstNumber < secondNumber) {
        firstNumber = secondNumber;
    }
    if (thirdNumber < fourthNumber) {
        thirdNumber = fourthNumber;
    }
    if (firstNumber > thirdNumber) {
        if (firstNumber > fifthNumber) {
            console.log("biggest = "+ firstNumber);
        } else {
            console.log("biggest = "+ fifthNumber);
        }
    } else {
        if (thirdNumber > fifthNumber) {
            console.log("biggest = "+ thirdNumber);
        } else {
            console.log("biggest = ",+ fifthNumber);
        }
    }
}
