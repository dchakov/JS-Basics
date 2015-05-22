//Problem 6. Most frequent number
//Write a script that finds the most frequent number in an array.

function mostFrequent() {
    var input = [4, 1, 1, 4, 2, 3, 4, 4, 1, 2, 4, 9, 3];
    var frequentNumber;
    var currentCount = 1;
    var count = 0;

    for (var i = 0; i < input.length; i++) {
        for (var j = i + 1; j < input.length; j++) {
            if (input[i] === input[j]) {
                currentCount++;
            }
        }
        if (currentCount > count) {
            count = currentCount;
            frequentNumber = input[i];
        }
        currentCount = 1;
    }
    console.log('Most frequent number: ' + frequentNumber + '(' + count + ' times)');
}
