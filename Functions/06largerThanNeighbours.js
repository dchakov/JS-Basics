//Problem 6. Larger than neighbours
//Write a function that checks if the element at given position in given array of integers is bigger than its two neighbours (when such exist).

function positionInteger(array, index) {
    if (index < 0 || index > array.length - 1) {
        return 'out of current range';
    } else if (index == 0 || index == array.length - 1) {
        return 'just one neighbour';
    } else {
        return array[index - 1] < array[index] && array[index + 1] < array[index];
    }
}

var arrarNeigh = [1, 3, 2, 4, 5, 2, 4, 6, 8, 9, 12, 3];
var indexOfElement = '10' * 1;

function largerThanNeigh() {
    console.log("Element at position " + '[' + indexOfElement + ']' + ' is bigger than its two neighbours?:' + positionInteger(arrarNeigh, indexOfElement));
}