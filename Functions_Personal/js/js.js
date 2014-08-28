/**
 * Kyle Szymanski
 * WPF-WDD 144
 * Assignment- Functions
 * 8/28/14.
 */

// The user and their friends are planning a skydiving adventure, and get video proof of this.
// Determine if each person brought enough money to go.

// Ask the user how many people are going.

var people = prompt(" How many people are going skydiving?");

// console.log out response.

console.log(people);

// Ask the user what the total cost for skydiving is as a group.

var skyTotal = prompt(" How much is it for the group to skydive total?");

// console.log out response

console.log(parseInt(skyTotal));

// Ask the user how much the total video price would be for the group.

var videoPrice = prompt("How much is the total video cost for the group?");

// console.log out response.

console.log(parseInt(videoPrice));

// Ask the user how much money each person plans on bringing with them.(Assuming everyone brings the same amount)

var cashOrcredit = prompt("How much money does each person plan on bringing?");

// console.log out response

console.log(parseInt(cashOrcredit));

// Create a function to calculate the person cost.

function moneyNeeded(skyTotal, videoPrice, people){
    // create variable money needed by adding sky total and video total then divide by the amount of people.

    var moneyNeeded = (skyTotal + videoPrice) / people;

    return moneyNeeded;


}

// create a variable for per person

var perPerson = moneyNeeded(parseInt(skyTotal), parseInt(videoPrice), people);

// console.log out information.

console.log(parseInt(perPerson));

// create a ternary to inform the user of their results.
// start out with a variable called cash Needed.

var cashNeeded;

cashNeeded = (cashOrcredit < perPerson) ? "You and your friends will need a little more money to go skydiving.." : " You and your friends are in for a great skydiving adventure!";

// console.log out cashNeeded to give the user their results!

console.log(cashNeeded);


