//Problem 6. Point in Circle
//Write an expression that checks if given point  P(x, y)  is within a circle  K(O, 5) .

function pointInCircle() {
    var x = document.getElementById("x").value;
    var y = document.getElementById("y").value;
    var result = (Math.abs(x * x) + Math.abs(y * y)) <= 2 * 2;
    console.log(x + ' ' + y + ' ' + 'inside:' + ' ' + result);
}