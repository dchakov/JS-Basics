//Problem 3. Min/Max of sequence
//Write a script that finds the max and min number from a sequence of numbers.

var number = Math.floor((Math.random() * 10)+1);
var arr = new Array(number);
var maxNumber = Number.MIN_VALUE;
var minNumber = Number.MAX_VALUE;

for (var i = 0; i < number; i++) {
    arr[i] = Math.floor((Math.random() * 100) + 1);
}

function funcMinMax() {
    for (var i = 0; i < number; i++) {
        console.log(arr[i]);
        if (maxNumber < arr[i]) {
            maxNumber = arr[i];
        }
        if (minNumber > arr[i]) {
            minNumber = arr[i];
        }
    }
    console.log("Max number:" + maxNumber);
    console.log("Min number:" + minNumber);
}
