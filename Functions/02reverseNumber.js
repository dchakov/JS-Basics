//Problem 2. Reverse number
//Write a function that reverses the digits of given decimal number.

function reverseNumber() {
    var numToRev = document.getElementById('num02').value;
    var arr = numToRev.split('');
    arr.reverse();

    console.log(arr.join(''));
}
