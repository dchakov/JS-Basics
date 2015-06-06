//Problem 1. Make person
//Write a function for creating persons.
//Each person must have firstname, lastname, age and gender (true is female, false is male)
//Generate an array with ten person with different names, ages and genders

function makePerson(firstname, lastname, age, gender) {
    return {
        firstname: firstname,
        lastname: lastname,
        age: age,
        gender: gender
    }
}
function randomFirstName() {
    var firstname = ['John', 'Jim', 'Nev', 'Dick', 'Carol', 'Susan', 'Ann', 'Gaga', 'Mony', 'Cris'];
    return firstname[Math.random() * 10 | 0];
}

function randomSecondName() {
    var secondname = ['Johanson', 'Jackson', 'Nevenkov', 'Dickov', 'Carolev', 'Sun', 'Grisham', 'Gadgev', 'Mogilov', 'Brown'];
    return secondname[Math.random() * 10 | 0];
}

var arrPersons = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map(function (_) {
    return makePerson(randomFirstName(), randomSecondName(), Math.random() * 100 | 0, Math.round(Math.random()) ? 'female' : 'male');
});

function problem01() {
    arrPersons.forEach(function (item) {
        console.log(item);
    });
}