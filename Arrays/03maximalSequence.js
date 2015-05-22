//Problem 3. Maximal sequence
//Write a script that finds the maximal sequence of equal elements in an array.

function maximalSequence() {
    var elements = [2, 1, 1, 2, 3, 3, 2, 2, 2, 1];
    var counter1 = 1;
    var counter2 = 0;
    var currentNumber;
    var result = [];

    for (var i = 1; i < elements.length; i++) {
        if (elements[i] === elements[i - 1]) {
            counter1++;
        } else {
            if (counter1 >= counter2) {
                counter2 = counter1;
                currentNumber = elements[i - 1];
            }
            counter1 = 1;
        }
    }

    for (var i = 0; i < counter2; i++) {
        result[i] = currentNumber;
    }
    console.log('Maximal sequence: ' + result.join(', '));
}

