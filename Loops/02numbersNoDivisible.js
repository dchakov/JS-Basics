//Problem 2. Numbers not divisible
//Write a script that prints all the numbers from 1 to N, that are not divisible by 3 and 7 at the same time.

function funcNumbers02() {
    var numberN = document.getElementById('num02').value;
    for (var i = 1; i <= numberN; i++) {
        if (i % 3 != 0 || i % 7 != 0) {
            console.log(i);
        }
    }
}
