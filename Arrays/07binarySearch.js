//Problem 7. Binary search
//Write a script that finds the index of given element in a sorted array of integers by using the binary search algorithm.

function binarySearch() {
    var arr = [-5, -3, -2, 1, 5, 8, 9, 13, 17, 23];
    arr.sort(orderBy);
    console.log(arr.join(', '));

    var searchedNumber = 1;
    var imin = 0;
    var imax = arr.length - 1;
    var imid = 0;

    while (imax >= imin) {
        imid = Math.floor((imax + imin) / 2);
        if (searchedNumber == arr[imid]) {
            break;
        } else if (searchedNumber > arr[imid]) {
            imin = imid + 1;
        } else {
            imax = imid - 1;
        }
    }
    console.log('Index of the given element ' + searchedNumber + ' is :' + imid);

}

function orderBy(a, b) {
    return a - b;
}
