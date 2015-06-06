var arrPresons02 = [
{ firstname: 'John', lastname: 'Dickov', age: 58, gender: 'female' },
{ firstname: 'Nev', lastname: 'Sun', age: 24, gender: 'female' },
{ firstname: 'Ann', lastname: 'Dickov', age: 17, gender: 'male' },
{ firstname: 'Susan', lastname: 'Nevenkov', age: 93, gender: 'female' },
{ firstname: 'Susan', lastname: 'Brown', age: 48, gender: 'male' },
{ firstname: 'Nev', lastname: 'Nevenkov', age: 14, gender: 'male' },
{ firstname: 'Cris', lastname: 'Carolev', age: 15, gender: 'male' },
{ firstname: 'Dick', lastname: 'Mogilov', age: 36, gender: 'female' }];

function problem02() {

    //Problem 2. People of age
    //Write a function that checks if an array of person contains only people of age (with age 18 or greater)

    function is18orGreat(persons) {
        return persons.age >= 18;
    }
    console.log('Contains only people of age 18 or greater:' + arrPresons02.every(is18orGreat));

    //Problem 3. Underage people
    //Write a function that prints all underaged persons of an array of person
    //Use Array#filter and Array#forEach


    var filterUnderage = arrPresons02.filter(function (person) {
        return person.age < 18;
    });

    filterUnderage.forEach(function (item) {
        console.log(item);
    });

    //Problem 4. Average age of females
    //Write a function that calculates the average age of all females, extracted from an array of persons
    //Use Array#filter

    var aveAgeFemales = arrPresons02.filter(function (person) {
        return person.gender == 'female';
    }).reduce(function (sum, person, i, arr) {
        return sum + person.age / arr.length;
    }, 0);

    console.log('Average age of all females: ' + aveAgeFemales);

    //Problem 5. Youngest person
    // Write a function that finds the youngest male person in a given array of people and prints his full name
    //Use only array methods and no regular loops (for, while)
    //Use Array#find

    if (!Array.prototype.find) {
        Array.prototype.find = function (callback) {
            var i, len = this.length;
            for (i = 0; i < len; i += 1) {
                if (callback(this[i], i, this)) {
                    return this[i];
                }
            }
        }
    }
    var youngestMale = arrPresons02.filter(function (person) {
        return person.gender == 'male';
    }).sort(function (p1, p2) {
        return p1.age - p2.age;
    });

    console.log(youngestMale[0]);

    //Problem 6. Group people
    //Write a function that groups an array of persons by first letter of first name and returns the groups as a JavaScript Object
    //Use Array#reduce

    var resultGroup = arrPresons02.reduce(function (arr, person) {
        var prop = person.firstname[0].toLocaleLowerCase();
        if (arr[prop]) {
            arr[prop].push(person);
        }
        else {
            arr[prop] = [];
            arr[prop].push(person);
        }
        return arr;
    }, {});

    console.log(JSON.stringify(resultGroup, null, '\t'));
}