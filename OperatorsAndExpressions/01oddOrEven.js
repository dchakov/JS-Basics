//Problem 1. Odd or Even
//Write an expression that checks if given integer is odd or even.

function funcOdd() {
    var number = prompt("Please enter a number");
    var result = (number % 2 == 1) ? true : false;
    console.log(number + ' ' + 'Odd?:' + ' ' + result);
}

