//Problem 6.
//Write a function that groups an array of people by age, first or last name.
//The function must return an associative array, with keys - the groups, and values - arrays with people in this groups
//Use function overloading (i.e. just one function)

function buildPerson(firstname, lastname, age) {
    return {
        firstname: firstname,
        lastname: lastname,
        age: age,
        toString: function toString() {
            return this.firstname + ' ' + this.lastname + ' ' + this.age;
        }
    }
}

function group(arrayP, key) {
    var associativeArray = {};
    for (var i in arrayP) {
        var assoProperty = arrayP[i][key];
        associativeArray[assoProperty] = [];
        for (var k in arrayP) {
            if (assoProperty === arrayP[k][key]) {
                associativeArray[assoProperty].push(arrayP[k]);
            }
        }
    }
    return associativeArray;
}

var doncho = buildPerson('Doncho', 'Minkov', 27);
var evlogi = buildPerson('Evlogi', 'Genov', 22);
var niki = buildPerson('Niki', 'Stoev', 24);
var doni = buildPerson('Doncho', 'Kostov', 22);
var koki = buildPerson('Niki', 'Kostov', 24);

var arrayP = [doncho, evlogi, niki, doni, koki];
var groupedByFname = group(arrayP, 'firstname');
var groupedByAge = group(arrayP, 'age');

function groupeAnArray() {
    for (var i = 0; i < arrayP.length; i++) {
        console.log(arrayP[i].toString());
    }
    
    for (var group in groupedByFname) {
        console.log(group);
        console.log(groupedByFname[group].toString());
    }
    for (var group in groupedByAge) {
        console.log(group);
        console.log(groupedByAge[group].toString());
    }
}