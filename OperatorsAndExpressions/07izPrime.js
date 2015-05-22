//Problem 7. Is prime
//Write an expression that checks if given positive integer number n (n ≤ 100) is prime.

function funcIsPrime() {
    var number = prompt('Please enter a number');
    var isPrime = true;
    if (number <= 1) {
        isPrime = false;
    }

    for (var i = 2; i <= Math.sqrt(number); i++) {
        if (number % i == 0) {
            isPrime = false;
        }
    }
    console.log(number + ' ' + 'Prime?' + ' ' + isPrime);
}
