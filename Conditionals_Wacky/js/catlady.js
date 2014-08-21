/**
 Kyle Szymanski
 Assignment- Conditionals
 8-20-14
 WPF - Section 02 - WDD 144
 */

var maxCats = 3;

var userCats = prompt("How many cats do you have?");

var houseHold = prompt("How many people are in your home?");

if(userCats === ""){ // If the user did not answer, prompt them again.
    userCats = prompt(" What is the number have cats you own?");
}
