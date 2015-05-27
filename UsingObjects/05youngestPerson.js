//Problem 5. Youngest person
//Write a function that finds the youngest person in a given array of people and prints his/hers full name
//Each person has properties firstname, lastname and age.

function checkYoungest(array) {
    var arrIndex = 0;
    var minAge = array[0].age;
    for (var i = 1; i < array.length; i++) {
        if (array[i].age < minAge) {
            minAge = array[i];
            arrIndex = i;
        }
    }
    return array[arrIndex].firstname + ' ' + array[arrIndex].lastname;
}

var people04 = [{
    firstname: 'Gosho',
    lastname: 'Petrov',
    age: 32
}, {
    firstname: 'Bay',
    lastname: 'Ivan',
    age: 81
}, {
    firstname: 'Tosho',
    lastname: 'Genov',
    age: 27
}];

function youngestPerson() {
    console.log("Youngest person:" + checkYoungest(people04));
}
