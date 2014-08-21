/**
 Kyle Szymanski
 Assignment- Conditionals
 8-20-14
 WPF - Section 02 - WDD 144
*/


// The user is wondering if they are considered a " Crazy Cat Lady " for owning so many cats.
//Figure out if the user has more cats than the max amount of cats that are allowed in a home in order to not be crazy.
// The max amount of cats in a home is 3 cats.

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

// If the user has less cats than the max amount of cats respond with you're not a crazy cat lady!

if(userCats < maxCats){
    //respond with you're not a crazy cat lady!
    console.log("You're not a crazy cat lady!")
}else if(userCats < houseHold){
    // respond with you have a normal amount of cats.
    console.log("You have a normal amount of cats.")
}else{
    // respond that they need to give away some cats, you crazy cat lady!.
console.log("You have to give away some cats, you crazy cat lady!");
}

// tell the user if the amount of cats they have compared to the max allowed.

console.log(" You have " + userCats + " cats, and " + houseHold + " people living with you. If the amount of cats is higher than " + maxCats + " and you have more cats than people, you are a crazy cat lady!");


