//Problem 4. Maximal increasing sequence
//Write a script that finds the maximal increasing sequence in an array.
//2,3,4,5,6,7,1,2,3,4,5,6,7,8

function maximalIncreasingSequence() {
    var elements = [3, 2, 3, 4, 2, 2, 4];
    var counter1 = 1;
    var counter2 = 0;
    var firstIndex;
    var result = [];

    for (var i = 1; i < elements.length; i++) {
        if (elements[i] > elements[i - 1]) {
            counter1++;
        } else {
            if (counter1 >= counter2) {
                counter2 = counter1;
                firstIndex = i - counter1;
            }
            counter1 = 1;
        }
    }
    if (counter1 >= counter2) {
        counter2 = counter1;
        firstIndex = i - counter1;
    }
    result = elements.splice(firstIndex, counter2);
    console.log('Maximal sequence: ' + result.join(', '));
}
