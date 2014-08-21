/**
 Kyle Szymanski
 Assignment- Conditionals
 8-20-14
 WPF - Section 02 - WDD 144
 */

var maxCats = 3;

// Ask the owner how many cats they have.

var userCats = prompt("How many cats do you have?");


if(userCats === ""){ // If the user did not answer, prompt them again.
    userCats = prompt(" What is the number have cats you own?");
}

// Otherwise continue.

// ask the user how many people are in the house hold.

var houseHold = prompt("How many people are in your home?");

// console.log out response.

console.log(houseHold);


