//Problem 3. The biggest of Three
//Write a script that finds the biggest of three numbers.
//Use nested if statements.

function funcBiggest() {
    var numA = document.getElementById("numA").value*1;
    var numB = document.getElementById("numB").value*1;
    var numC = document.getElementById("numC").value*1;
    var result;

    if (numA > numB) {
        if (numA > numC) {
            result = numA;
        } else {
            result = numC;
        }
    } else {
        if (numB > numC) {
            result = numB;
        } else {
            result = numC;
        }
    }
    console.log('biggest:' + ' ' + result);
}
