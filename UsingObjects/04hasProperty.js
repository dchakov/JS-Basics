//Problem 4. Has property
//Write a function that checks if a given object contains a given property.

// without build-in method
function checkHasProperty (obj,string) {
	hasProp = false;
	for (var prop in obj) {
		if (prop === string) {
			hasProp = true;
		}
	}
	return hasProp;
}
var student04 = {
    firstName: 'Nikolay',
    lastName: 'Ivanov',
    lenght: 23,
    height: 185
};

function hasProperty () {
	console.log("Object contains a given property:");
	console.log(checkHasProperty(student04,'lenght'));
	console.log("Build-in function object contains a given property:");
	console.log(student04.hasOwnProperty('lastName'));
	console.log(student04.hasOwnProperty('height'));
	console.log(student04);
}
