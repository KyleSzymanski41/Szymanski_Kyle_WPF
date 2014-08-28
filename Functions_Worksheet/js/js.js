/**
 * Created by kyleszymanski on 8/27/14.
 * WPF-WDD 144 - Stung!
 *
 */


//It takes 8.666666667 bee stings per pound to kill an animal. Calculate how many bee stings are needed to kill an animal in a function
// ask the user the victims weight in pounds.

var weight = prompt("How many pounds does the victim weigh?");

// console.log out response.

console.log(weight);

// The number of be stings it takes to kill an animal per pound is 8.666666667

var beeStings = 8.666666667;

// Calculate how many stings it would take to kill the victim.

var numberofStings = calculateNumberofstings(weight, beeStings);

// create a function to see how many bee stings it will take to kill an animal.

function calculateNumberofstings(weight, beeStings){

    var stings = weight * beeStings;

    return stings;
}

// console.log out results of function

console.log("It takes " + numberofStings + " to kill this animal.");