/*
 Kyle Szymanski
 Assignment: Expressions
 8-13-14
 WPF - WDD 144 Section 02

 */

// The user and some friends return cans to a recycling center for extra money. How much money will each person receive?

// Givens
// Ask user how many friends helped return cans.

var people = prompt("How many friends help you return cans?");

// Console log out response.

console.log(people);

// Ask user what the return value for each can is in cents, use decimals.

var worth = prompt("What is the return value for each can worth in cents? Use decimals.");

//Console log out response.

console.log(worth);

// Ask user how many cans they returned.

var cans = prompt("How many cans did you return?");

// Console log out response.

console.log(cans);

//Ask the user what the price for returning the can is.

var price = prompt("How much does the fee cost to return cans?");

//Console log out response.

console.log(price);

// Let the user know what we are doing.

alert("Lets see how much you each will receive for returning cans.");


// Multiply the can value by the number of cans to get the value of all the cans.

var value = cans * worth;

// console.log out information.

console.log(value);

//Now subtract the value of the cans from the cost to return them.

var totalValue = value - parseInt(price);

// console.log out information.

console.log(totalValue);

// Now that we have discovered what the total value is, we need to figure how how much each person gets.
// Divide total value by people.

var moneySplit = totalValue / people;

console.log(moneySplit);

// Inform the user what each person shall get.

console.log(" You and each of your friends shall receive $" + moneySplit + " back from returning cans.");