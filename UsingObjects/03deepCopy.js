//Problem 3. Deep copy
//Write a function that makes a deep copy of an object.
//The function should work for both primitive and reference types.


function deepCopy(obj) {
    var cloned = {};
    for (var prop in obj) {
        if (typeof obj[prop] === "object") {
            cloned[prop] = obj[prop];
            deepCopy(obj[prop]);
        } else {
            cloned[prop] = obj[prop];
        }
    }
    return cloned;
}

var student = {
    firstName: 'Nikolay',
    lastName: 'Ivanov',
    hair: {
        color: 'blue',
        kind: 'curly'
    }
};

var student2 = deepCopy(student);

function deepCopyFunction() {
    console.log(student);
    console.log(student.hair);
    console.log(student2);
    console.log(student2.hair);
}
