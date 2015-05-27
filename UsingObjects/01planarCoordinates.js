//Problem 1. Planar coordinates
//Write functions for working with shapes in standard Planar coordinate system.
//Points are represented by coordinates P(X, Y)
//Lines are represented by two points, marking their beginning and ending L(P1(X1,Y1), P2(X2,Y2))
//Calculate the distance between two points.
//Check if three segment lines can form a triangle.


function calculateDistanse(point1, point2) {
    var distance = Math.sqrt(
        Math.abs(point2.x - point1.x) * Math.abs(point2.x - point1.x) +
        Math.abs(point2.y - point1.y) * Math.abs(point2.y - point1.y));
    return distance.toFixed(2);
}

var point1 = { x: 1, y: 2 };
var point2 = { x: 3, y: 5 };
var point3 = { x: 3, y: 2 };

var arrLines = [calculateDistanse(point1, point2),
                calculateDistanse(point2, point3),
                calculateDistanse(point1, point3)]

arrLines.sort();

function planarCoordinates() {
    console.log('Distance: '+calculateDistanse(point1, point2));
    console.log(arrLines);
    console.log('Can form a triangle:' + ((arrLines[0]*1 + arrLines[1]*1) > arrLines[2]*1));
}