//Problem 6. Point in Circle
//Write an expression that checks if given point  P(x, y)  is within a circle  K(O, 5) .

function pointInCircle() {
    var x = document.getElementById("x06").value;
    var y = document.getElementById("y06").value;
    var result = (Math.abs(x * x) + Math.abs(y * y)) <= 5 * 5;
    console.log(x + ' ' + y + ' ' + 'inside:' + ' ' + result);
}