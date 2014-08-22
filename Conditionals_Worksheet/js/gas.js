/**
 * Created by kyleszymanski on 8/21/14.
 * assignment - Last chance for gas!
 * wpf-wdd 144 conditional worksheet
 */

// A driver has to determine if they can make it across the desert with their current fuel.
// They are about to past the last gas station for the next 200 miles and they need to determine whether they should stop now for gas
// or not.

// Ask the user for the gas mpg.

var mpg = prompt("What does your car get in mpg");

// console.log out response.

console.log(mpg);

// Ask the user for their Gauge reading of the gas tank (in %)

var gaugeReading = prompt("What is your gauge reading of the gas tank in %? e.g 50% = .50");

// console.log out response.

console.log(gaugeReading);

// ask the user how much their gas tank holds.

var gasTank = prompt("How much gas does your tank hold?");

// console.log out response.

console.log(parseInt(gasTank));

// multiply gas tank by gauge reading

var gasRemaining = parseInt(gasTank) * gaugeReading;

// console.log out information.

console.log(parseInt(gasRemaining));

// To determine how many miles they can go on the tank of gas, multiply mpg by gas remaining.

var mileToempty = parseInt(gasRemaining) * mpg;

// console.log out information

console.log(mileToempty);

if(mileToempty > 200){
    // console.log out “Yes, you can make it without stopping for gas!”
    console.log("Yes, you can make it without stopping for gas!");
}else{
    // console.log You only have X gallons of gas in your tank, better get gas now while you can!”
    console.log("You only have " + gasRemaining + " gallons of gas in your tank, better get gas now while you can!");
}

