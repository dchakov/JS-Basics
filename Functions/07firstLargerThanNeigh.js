//Problem 7. First larger than neighbours
//Write a function that returns the index of the first element in array that is larger than its neighbours or -1, if there’s no such element.
//Use the function from the previous exercise.


function positionInteger(array, index) {
    if (index < 0 || index > array.length - 1) {
        return 'out of current range';
    } else if (index == 0 || index == array.length - 1) {
        return 'just one neighbour';
    } else {
        return array[index - 1] < array[index] && array[index + 1] < array[index];
    }
}

var arrarNeigh = [1, 2, 6, 4, 5, 5, 12, 6, 8, 9];


function firstLargerThanNeigh() {
	var isBigger = -1;
    for (var i = 1; i < arrarNeigh.length-1; i++) {
        if (positionInteger(arrarNeigh, i)) {
           isBigger = i;
           break;
        }
    }
    console.log("Index of the first element in array that is larger than its neighbours:" + '[' + isBigger + ']');
}
