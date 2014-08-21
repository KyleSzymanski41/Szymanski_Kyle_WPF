/*
Kyle Szymanski
WPF- WDD 148 - section 02
8-20-14
Assignment - Conditionals
 */

// The user is looking to go out for an alcoholic beverage with his friends, find out if he can.

// Ask the user his or her name.

var name = prompt(" What is your name?");

// Say hello to the user!

alert(" Hello " + name + " nice to meet you!");

// Find out if the user is able to join his friends for a alcoholic beverage

var drinkingAge = prompt(" What is the legal drinking age in your area?");

// console.log out drinking age

console.log(drinkingAge);

// Ask the user to input their age.

var age = prompt(" Please tell me your age.");

// Validate prompt.

if(age === ""){ // If age is blank re-prompt the user for their age!
    age = prompt(" Please enter your age!");
}

// The continue on

// Otherwise continue

// Figure out if the users age allows them to have a drink with friends.

/*if(age >= drinkingAge){
    // You can have a drink!
    console.log(" You can have a drink!");
}else{
    // Sorry, you can not have a drink!
    console.log(" Sorry, you can not have a drink!");
} */

// Inform user about their age compared to drinking.

(age >= drinkingAge) ? console.log("You can have a drink!") : console.log("Sorry,you can not have a drink!");

