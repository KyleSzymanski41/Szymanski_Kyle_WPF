/**
 * Kyle Szymanski
 * 8/28/14.
 * WPF-WDD 144
 * Assignment - Functions
 */

// The Shipping manager for a phone book plant is concerned he may be short on the product being shipped.
// He knows they have extra in storage just in case which would meet the order.
// Help the manager determine if he has to use his stored supply.

// Ask the user how many books are bundled per wrap.

var booksperBundle = prompt("How many books are bundled per wrap?");

// console.log out response

console.log(booksperBundle);

// Ask user how many layers are on a pallet.

var layers = prompt("How many layers are on each pallet?");

// console.log out response.

console.log(layers);

// Ask the user how many pallets they have shipped.

var shipPallets = prompt("How many pallets have shipped?");

// console.log out response.

console.log(shipPallets);

// Ask user how many books were ordered?

var booksOrdered = prompt("How many books were ordered?");

// console.log out response.

console.log(booksOrdered);

// Create a function to indicate how many total books there.

function totalBooks(booksperBundle, layers, shipPallets){

    var totalBooks = booksperBundle * layers * shipPallets;

    return totalBooks;

}
// Create a variable to check total books
var books = totalBooks(parseInt(booksperBundle), parseInt(layers), parseInt(shipPallets));

// console.log out books.
console.log(parseInt(books));

// We know that they have extra books in storage in case they run short.

var extraBooks = true;

// create and if and else statement to provide results.

if(books < booksOrdered || extraBooks ){
    // console.log out " We will have enough books for this order."
    console.log("You will have enough books to ship.");
}else{
    //console.log out "You may be in trouble."
    console.log("you may be in trouble.");
}

