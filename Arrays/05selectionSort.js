//Problem 5. Selection sort
//Sorting an array means to arrange its elements in increasing order.
//Write a script to sort an array.
//Use the selection sort algorithm: Find the smallest element, move it at the first position, find the smallest from the rest, move it at the second position, etc.
//Hint: Use a second array

function selectionSort() {
    var arr = [3, 1, 2, -3, 4, -2, 17, 11, 95, 2, 4];
    var smallest = 0;
    console.log(arr.join(', '));

    for (var i = 0; i < arr.length - 1; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                smallest = arr[j];
                arr[j] = arr[i];
                arr[i] = smallest;
            }
        }
    }
    console.log(arr.join(', '));
}
