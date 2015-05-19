//Problem 1. Exchange if greater
//Write an  if  statement that takes two double variables  a  and  b  and exchanges their values if the first one is greater than the second.
//As a result print the values  a  and  b , separated by a space.

function funcExchange() {
    var numA = document.getElementById("numA01").value*1;
    var numB = document.getElementById("numB01").value*1;
    var numC;
    if (numA > numB) {
        numC = numA;
        numA = numB;
        numB = numC;
    }
    console.log(numA + ' ' + numB);
}