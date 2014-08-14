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

alert("List your time in seconds.")

var lap1 = prompt("What is lap time number 1?");

// console.log out response.

console.log(lap1);

// Ask them for 2nd lap time

var lap2 = prompt("What is your 2nd lap time?");

// console.log out response.

console.log(lap2);

// Ask them for their 3rd lap time.

var lap3 = prompt("What is your 3rd lap time?");

// console.log out response

console.log(lap3);

// Ask them for their final lap time.

var lap4 = prompt("What is your 4th lap time?");

// console.log out response.

console.log(lap4);

var lap5 = prompt("What is your final lap time?");

// console.log out response.

console.log(lap5);

//array

var lTimes = [lap1 , lap2 , lap3 , lap4 , lap5]; //0,1,2,3

console.log(lTimes);

// add laps together

var totalTime = parseInt(lTimes[0]) + parseInt(lTimes[1]) + parseInt(lTimes[2]) + parseInt(lTimes[3]) + parseInt(lTimes[4]);

// console.log out answer.

console.log(totalTime);

// Average out lap times by dividing by 5

var average = totalTime / 5;

// Console.log out answer.

console.log(average);

// Now that we have the average lap time in seconds we need to find out his speed.
// Multiply seconds per min

var secondsperMin = 60 * 1;

// console.log out answer

console.log(secondsperMin);

// Multiply minutes per hour

var minuperHour= 60 * 1;

// console.log out answer

console.log(minuperHour);

// Multiply seconds per minute by minutes per hour

var secondsperHour = secondsperMin * minuperHour;

// console.log out answer

console.log(secondsperHour);

// divide average by seconds per hour.

var time = average / secondsperHour;

// console.log out answer.

console.log(time);

// Ask user how long track was in miles.

var trackLength = prompt("How long was the track in miles?")

// console.log out response.

console.log(trackLength);

// divide track length by time to get miles per hour.

var mph = parseInt(trackLength) / time;

//console.log out answer.

console.log(mph);

// Inform user on average lap and speed on average lap.

console.log(" Your average lap time in seconds is " + average + " and your speed during that time was " + mph + "mph");

