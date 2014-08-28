/**
 * Created by kyleszymanski on 8/27/14.
 * Circumference of a circle.
 * WPF - WDD 144 - Functions worksheet
 */

// A user is looking for the circumference of a circle.

// Find the radius of the circle.

var r = prompt(" What is the radius of the circle?");

// console.log out information

console.log(parseInt(r));

var d = 2 * parseInt(r);

console.log(parseInt(d));

var p = 3.14;

var circumference = calculateCircumference(d, p);


function calculateCircumference(d, p){

    var circumCircle = d * p;

    return circumCircle;

}

console.log(circumference);



