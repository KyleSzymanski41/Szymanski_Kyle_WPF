/*
 kyleszymanski
 WPF-WDD 144 Section 2
 Expressions
 8-14-13
 */


// The user is building a rectangular platform for his work station.
// Use L x W x H to find the volume
// Then use 2LW + 2LH + 2WH to find the surface area.
// Inform the user of his volume and surface area

// Ask the user for the length of the platform in feet.

var length = prompt("What is the length of the platform in feet?");

// console.log out response.

console.log(length);

// Ask the user for the width of the platform in feet.

var width = prompt("What is the width of the platform in feet?");

// console.log out response.

console.log(width);

// Ask the user for the height of his platform in feet.

var height = prompt("What is the height of the platform in feet?");

// console.log out response.

console.log(height);

// Find the volume of the platform.

var volume = parseInt(length) * parseInt(width) * parseInt(height);

// console.log out information.

console.log(volume);

// Find out the surface area of the platform.

// Find 2LW

var lengthWidth = 2 * (parseInt(length) * parseInt(width));

//console.log out information

console.log(lengthWidth);

// Find 2LH

var lengthHeight = 2 * (parseInt(length) * parseInt(height));

// console.log out information.

console.log(lengthHeight);

var widthHeight = 2 * (parseInt(width) * parseInt(height));

// console.log out information.

console.log(widthHeight);