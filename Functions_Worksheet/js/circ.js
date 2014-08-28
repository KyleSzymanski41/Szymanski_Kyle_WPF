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

// To find the diameter multiply 2 by the radius

var d = 2 * parseInt(r);

// console.log out results

console.log(parseInt(d));

// var p is pie and will be 3.14

var p = 3.14;

var circumference = calculateCircumference(d, p);

// use function to print out results.

console.log("The circumference of the circle is " + circumference + ".");


// create a function to find the circumference.

function calculateCircumference(d, p){
    // multiply d by p to get the circumference.

    var circumCircle = d * p;

    return circumCircle;

}





