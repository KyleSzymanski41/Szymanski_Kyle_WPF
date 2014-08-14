/*
 Kyle Szymanski
 WPF 1408 Section 02
 Slices of Pie part 2
 8-13-14
 */

//Sparky the hosts dog gets to eat the left over pizza. How many slices will he get assuming the people eat whole slices?

var people = 10;

var pizzaOrdered = 4;

var slicesperPizza = 8;

// To find out how many slices there are we need to multiply the number of pizza to the number of slices per pizza.

var totalSlices = pizzaOrdered * slicesperPizza

console.log(totalSlices);

// Now that we know the number of slice we have overall, we need to divide that by the number of people.

var slices = totalSlices / people;

console.log(totalSlices / people);

// This would give us our answer for slices per person.

console.log(slices);

//Assuming everyone only eats whole slices each person would get 3. So how may would Sparky get?

var partSlice = .2

console.log(partSlice)

var result = partSlice * people;

console.log(result);

console.log(" Sparky got " + result + " amount of slices ");







