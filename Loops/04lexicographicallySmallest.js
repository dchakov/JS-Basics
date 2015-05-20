//Problem 4. Lexicographically smallest
//Write a script that finds the lexicographically smallest and largest property in document, window and navigator objects.

function funcLexSmallest(obj) {
    var smallest = 'zzzzzzzz';
    var largest = '';
    var arr = [document, window, navigator];

    for (var i = 0; i < arr.length; i++) {
        for (var property in arr[i]) {

            if (largest < property) {
                largest = property;
            }
            if (smallest > property) {
                smallest = property;
            }
        }
        console.log(arr[i]);
        console.log('smallest:' + smallest);
        console.log('largest:' + largest);
        smallest = 'zzzzzzzz';
    	largest = '';
    }
}
