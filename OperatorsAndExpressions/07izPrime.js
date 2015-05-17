//Problem 7. Is prime
//Write an expression that checks if given positive integer number n (n ≤ 100) is prime.

function funcIsPrime() {
    var number = prompt('Please enter a number');
    var result;
    if (number == 2) {
        result = true;
    }
    else if (number <= 0) {
        result = false;
    }
    else {
        var k = null;
        for (var i = 1; i <= Math.sqrt(number) ; i++) {
            if (number % i == 0) {
                k += 1;
            }
        }
        if (k == 2) {
            result = true;
        }
        else {
            result = false;
        }
    }
    console.log(number + ' ' + 'Prime?' + ' ' + result);
}