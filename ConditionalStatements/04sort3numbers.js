//Problem 4. Sort 3 numbers
//Sort 3 real values in descending order.
//Use nested if statements.

function funcSort() {
    var a = document.getElementById("numA04").value * 1;
    var b = document.getElementById("numB04").value * 1;
    var c = document.getElementById("numC04").value * 1;
    var result;


    if (a > b) {
        if ((a > c) && (b > c)) {
            console.log(a + ' ' + b + ' ' + c);
        } else if ((a > c) && (c > b)) {
            console.log(a + ' ' + c + ' ' + b);
        } else {
            console.log(c + ' ' + a + ' ' + b);
        }
    } else // b>=a
    {
        if ((a > c) && (b > c)) {
            console.log(b + ' ' + a + ' ' + c);
        } else if ((a < c) && (b > c)) {
            console.log(b + ' ' + c + ' ' + a);
        } else {
            console.log(c + ' ' + b + ' ' + a);
        }
    }
}
