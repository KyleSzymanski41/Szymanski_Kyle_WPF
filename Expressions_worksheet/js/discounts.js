/**
 Kyle Szymanski
 WPF 1408 section 02
 Discounts
 8-13-14
 */


//Create an expression that will calculate the discounted price with and without sales tax.

var originalPrice = 80.20;

var discountPercentage = 25;

var taxPercentage = 8;

var item = "shoes";

// we need to first determine how much of a discount we get.

var dis = discountPercentage * 0.01 ;

console.log(dis);

// Next we multiply the discount and the original to get out money off.

var dollarsOff = originalPrice * dis;

console.log(dollarsOff);

// next we subtract the dollars off price from the original

var disPrice = originalPrice - dollarsOff;

console.log(disPrice);

// this gives us our discounted item with no tax added.

// Then we need to find out tax.

var tax = taxPercentage * 0.01;

console.log(tax);

// We then multiply this number against the discounted item.

var taxPrice = tax * disPrice;

console.log(taxPrice);

// To figure out what the price is with taxes we have to add the tax price to the discount price.

var withTaxes


