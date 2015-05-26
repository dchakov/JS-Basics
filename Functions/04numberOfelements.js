//Problem 4. Number of elements
//Write a function to count the number of div elements on the web page



function numberOfElements () {
	var numberOfEl = document.getElementsByTagName('div').length;
	console.log('Number of div elements:' + numberOfEl);
}