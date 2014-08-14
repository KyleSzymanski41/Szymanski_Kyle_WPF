/*
Kyle Szymanski
WPF 1408 section 02
Slice of Pie part 1
8-13-14
 */

//A bunch of students are having a party and somebody ordered pizza.

//Create an expression that calculates how much pizza each partygoer will get at the party.

var peopleatParty = 24;

console.log(peopleatParty);

// If there are 24 students attending we need to find out how many slice they can have.

var slicesperPizza = 12;

var pizzasOrdered = 9;

var totalpizzaSlices = slicesperPizza * pizzasOrdered;

console.log(totalpizzaSlices);

// To find out the slices they can have, divide the total slices by people.

var xSlices = totalpizzaSlices / peopleatParty;

console.log(totalpizzaSlices / peopleatParty);


console.log(" Each person ate " + xSlices + " amount of slices. " );





