﻿//Problem 11. String format
//Write a function that formats a string using placeholders.
//The function should work with up to 30 placeholders and all types.

function stringFormat() {
    var result = arguments[0],
    counter;
    for (var i = 0; i < arguments.length - 1; i++) {
        counter = 0;
        while (result.indexOf('{' + i + '}', counter) >= 0) {
            result = result.replace('{' + i + '}', arguments[i + 1]);
            counter += 1;
        }
    }
    return result;
}
var frmt = '{0}, {1}, {0} text {2}';

function formatStringPlace() {
    console.log(stringFormat('Hello {0}!', 'Peter'));
    console.log(stringFormat(frmt, 1, 'Pesho', 'Gosho'));
}