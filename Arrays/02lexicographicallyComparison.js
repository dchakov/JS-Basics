//Problem 2. Lexicographically comparison
//Write a script that compares two char arrays lexicographically (letter by letter).


function lexicogComparison() {

    var arr1 = ['a', 1, 's', 'u', 'w', 'z', 'q'];
    var arr2 = ['a', 's', 1, 'u', 'z', 'w', 'q'];
    var isEqual = true;
    console.log(arr1.join(', '));
    console.log(arr2.join(', '));

    console.log("sorted:");
    arr1.sort();
    arr2.sort();

    console.log(arr1.join(', '));
    console.log(arr2.join(', '));

    for (var prop in arr1) {
        if (arr1[prop] !== arr2[prop])
            isEqual = false;
    }
    for (var prop in arr2) {
        if (arr1[prop] !== arr2[prop])
            isEqual = false;
    }
    console.log("Equal ?:" + isEqual);
}

