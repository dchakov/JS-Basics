//Problem 4. Third digit
//Write an expression that checks for given integer if its third digit (right-to-left) is 7.

function functThirdDigit() {
    var number = prompt("Please enter a number");
    var result = ((Math.floor(number/100)) % 10 == 7)  ? true : false;
    console.log(number + ' ' + 'Third digit 7?' + ' ' + result);
}