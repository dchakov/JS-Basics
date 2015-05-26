//Problem 1. English digit
//Write a function that returns the last digit of given integer as an English word.

function englishDigit() {
    var number01 = document.getElementById('num01').value * 1;
    var lastDigit = (number01 % 10) | 0;
    var arr = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    console.log(arr[lastDigit]);
}