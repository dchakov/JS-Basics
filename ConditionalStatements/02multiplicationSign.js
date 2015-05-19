//Problem 2. Multiplication Sign
//Write a script that shows the sign (+, - or 0) of the product of three real numbers, without calculating it.
//Use a sequence of if operators.

function funcSign() {
    var numA = document.getElementById("numA02").value*1;
    var numB = document.getElementById("numB02").value*1;
    var numC = document.getElementById("numC02").value*1;
    var result;
    if (numA == 0 || numB == 0 || numC == 0) {
        result = 0;
    } else {
        if (numA > 0) {
            if (numB > 0 ^ numC > 0) {
                result = '-';
            } else {
                result = '+';
            }
        } else {
            if (numB > 0 ^ numC > 0) {
                result = '+';
            } else {
                result = '-';
            }
        }
    }
    console.log('result:' + ' ' + result);
}
