﻿//Problem 2. Remove elements• Write a function that removes all elements with a given value.
//Attach it to the array type.
//Read about prototype and how to attach methods.
//arr.remove(1); //arr = [2,4,3,4,111,3,2,'1']

Array.prototype.remove = function () {
    for (var i = 0; i < this.length; i++) {
        if (this[i] === arguments[0]) {
            this.splice(i, 1);
            i--;
        }
    }
}

var arr = [1, 2, 1, 4, 1, 3, 4, 1, 111, 3, 2, 1, '1'];

function removeElements() {
    console.log(arr);
    arr.remove(1);
    console.log(arr);
}
removeElements()