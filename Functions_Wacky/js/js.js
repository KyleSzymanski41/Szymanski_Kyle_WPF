/**
 kyleszymanski
 8/27/14.
 WPF-WDD 144
 Assignment - Functions
 */

// The user is wondering how his golf game is doing. Are they getting better, worse or even?

// Ask the user for the following, Par of the hole, and shots taken.

var par = prompt("What is par for the hole?");

console.log(par);

// ask the user for the amount of stroke they had.

var strokes = prompt("How many stokes did you take?");

// console.log out response.

console.log(strokes);

// declare an anonymous function for golfing.

var golfing = function(strokes, par){

    var overUnder = strokes - par;

    return overUnder;
};

var golfer = golfing(strokes, par);

console.log(golfer);

if(strokes > par){

    console.log(" You shot a plus " + golfer + " on a par " + par + " hole, so I guess you need to practice to be up to par!");

}