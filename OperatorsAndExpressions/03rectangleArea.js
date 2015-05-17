//Problem 3. Rectangle area
//Write an expression that calculates rectangle’s area by given width and height.

function rectangleArea() {
    var width, height;
    width = document.getElementById("width").value;
    height = document.getElementById("height").value;
    var result = width * height;
    console.log('Area:' + ' ' + result);

}