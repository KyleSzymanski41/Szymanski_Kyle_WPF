/**
 * Created by kyleszymanski on 8/21/14.
 * assignment - movie ticket price - conditional worksheet
 * WPF - WDD - 144 section 02
 */

//The local movie theater in town has a ticket price of $12.00 but if you are a senior (55 and older), under 10 you get the discounted price of $7.00.
// In addition, if a customer is seeing a movie between 3pm and 5pm they can also get the discounted price.
//Determine which of the two prices the customer is eligible for.

var ticketPrice = 12.00

var ticketDiscounted = 7.00

// Ask the user what their age is.

var age = prompt("How old are you?");

// console.log out response.

console.log(age);

// ask the user what time they will be arriving at the movie theater.

var time = prompt("What time will you be going to the movies?" + "Use decimal with your answer. e.g. 3:30 = 3.30");

// console.log out response.

console.log(time);

// verify information.

if(age >= 55 || age <= 10){
    // console log out the ticket price is "x".
    console.log("The ticket price is " + ticketDiscounted + " dollars.");
}else if(time >= 3 && time <= 5){
    // console.log out ticket price is "x"
    console.log("Ticket price is " + ticketDiscounted + " dollars.");
}else{
    // console.log out ticket price is "x"
    console.log("Ticket price is " + ticketPrice + " dollars.");
}