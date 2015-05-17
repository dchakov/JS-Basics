//Problem 9. Point in Circle and outside Rectangle
//Write an expression that checks for given point  P(x, y)  if it is within the circle  K( (1,1), 3)  and out of the rectangle  R(top=1, left=-1, width=6, height=2).


function pointInCirOutRec() {
    var pointX = document.getElementById("pointX").value;
    var pointY = document.getElementById("pointY").value;
    var diametar = (pointX - 1) * (pointX - 1) + (pointY - 1) * (pointY - 1);

    //R(up=1, left=-1, right=5, down=-1)

    var result = ((diametar <= 1.5 * 1.5) && !(pointX <= 5 && pointX >= -1 && pointY <= 1 && pointY >= -1)) ? "yes" : "no";

    console.log(pointX + ' ' + pointY + ' ' + 'inside K & outside of R:' + ' ' + result);
}