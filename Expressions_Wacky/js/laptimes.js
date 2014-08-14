/*
 Kyle Szymanski
 8-13-14
 Assignment: Expressions
 WPF - WDD 144 Section 02
 */

// The user wants to know how he did at track day.
// Calculate the average of his lap times using an array.
// Determine his how fast he was going at that time. Use miles per hour.


// Ask the user their name.

var name = prompt("what is your name?");

alert("Hello " + name);

// Ask the user for their lap times one at a time in seconds for an array.

var lap1 = prompt("What is lap time number 1 in seconds?");

// console.log out response.

console.log(lap1);

// Ask them for 2nd lap time

var lap2 = prompt("What is your 2nd lap time in seconds?");

// console.log out response.

console.log(lap2);

// Ask them for their 3rd lap time.

var lap3 = prompt("What is your 3rd lap time in seconds?");

// console.log out response

console.log(lap3);

// Ask them for their final lap time.

var lap4 = prompt("What is your final lap time in seconds?");

// console.log out response.

console.log(lap4);

// Add lap times to array

var lapTimes = [lap1 , lap2 , lap3 , lap4] ; //0,1,2,3

console.log(lapTimes);

// Add array together. //0,1,2,3

var total = lapTimes[0] + lapTimes[1] + lapTimes[2] + lapTimes[3];

console.log(total);

var average = total / 4;

console.log(average);

