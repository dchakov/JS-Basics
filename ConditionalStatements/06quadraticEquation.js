//Problem 6. Quadratic equation
//Write a script that reads the coefficients a, b and c of a quadratic equation ax2 + bx + c = 0 and solves it (prints its real roots).
//Calculates and prints its real roots.

function funcQuadratic() {
    var a = document.getElementById("numA").value * 1;
    var b = document.getElementById("numB").value * 1;
    var c = document.getElementById("numC").value * 1;
    var rootX1, rootX2;

    // Δ = b2 - 4ac
    var discriminant = (b * b) - (4 * a * c);

    //When Δ<0, there are no real roots, there are 2 complex roots x1=(-b+i√-Δ)/(2a) and x2=(-b-i√-Δ)/(2a).
    if (discriminant < 0) {
        console.log('no real roots');
    }
    // When Δ=0, there is one root x1=x2=-b/(2a).
    else if (discriminant === 0) {
        rootX1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        rootX2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        console.log('x1=x2=' + rootX1);
    }
    // When Δ>0, there are 2 real roots x1=(-b+√Δ)/(2a) and x2=(-b-√Δ)/(2a).
    else {
        rootX1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        rootX2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        console.log('x1=' + rootX2 + ';' + 'x2=' + rootX1);
    }
}
