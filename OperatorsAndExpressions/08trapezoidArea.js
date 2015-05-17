//Problem 8. Trapezoid area
//Write an expression that calculates trapezoid's area by given sides  a  and  b  and height  h .

function trapezoidArea() {
    var a = document.getElementById("sideA").value;
    var b = document.getElementById("sideB").value;
    var h = document.getElementById("heightH").value;
    var resultArea = ((a*1 + b*1) * h) / 2;
    console.log(a + ' ' + b + ' ' + h + ' ' + 'area:' + ' ' + resultArea);
}