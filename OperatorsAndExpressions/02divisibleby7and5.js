//Problem 2. Divisible by 7 and 5
//Write a boolean expression that checks for given integer if it can be divided (without remainder) by  7  and  5  in the same time.

function funct7and5() {
    var number = prompt("Please enter a number");
    var result = ((number % 7 == 0) && (number % 5 == 0)) ? true : false;
    console.log(number + ' ' + 'Divided by 7 and 5?' + ' ' + result);
}