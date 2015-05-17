//problem 1. 
//Assign all the possible JavaScript literals to different variables.

var integer = 25;
var float = 1.25;
var boolean = true;
var string = 'Some text';
var array = [integer, float, boolean, string];
var object = { dog: "brown", cat: "white", 2: "blue" };
var funct = function myfunction() {
    return 'fun';
};


for (var i = 0; i < array.length; i++) {
    console.log(array[i]);
}

console.log(object.dog);
console.log(object.cat);
console.log(object[2]);
console.log(funct());

//problem 2
//Create a string variable with quoted text in it.
// For example: `'How you doin'?', Joey said'.

var quatedText = "'How you doin'?',Joey said";
console.log(quatedText);

//problem 3 & 4
// Try typeof on all variables you created.
//Create null, undefined variables and try typeof on them.

var nullLit = null;
var undefinedLit = undefined;

var allLit = [integer, float, boolean, string, array, object, funct,
    undefinedLit, nullLit];
for (var i = 0; i < allLit.length; i++) {
    console.log(typeof allLit[i]);
}
