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

// If the user has more cats than the max amount of cats respond with you're a crazy cat lady!

if(userCats < maxCats){
    //respond with you're a crazy cat lady!
    console.log("You're not a crazy cat lady!")
}else if(userCats < houseHold){
    // respond with you have a normal amount of cats.
    console.log("You have a normal amount of cats.")
}else{
    // respond that they need to lose cats.
console.log("You have to give away some cats, you crazy cat lady!");
}


