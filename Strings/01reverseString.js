//Problem 1. Reverse string
//Write a JavaScript function that reverses a string and returns it.

function reverseS(string) {
    return string.split('').reverse().join('');
}

var string = 'nikolay stoqnov';

function reverseString() {
    console.log(reverseS(string));
}