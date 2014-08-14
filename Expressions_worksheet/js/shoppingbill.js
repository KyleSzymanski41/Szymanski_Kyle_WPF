/*
 Kyle Szymanski
 WPF 1408 Section 02
 Average Shopping Bill
 8-13-14
 */

//array
var shoppingBills = [287.63 , 426.24 , 127.99 , 333.11 , 220.00]; // 0,1,2,3,4

console.log(shoppingBills);


//You are budgeting your money for the year and must calculate your average weekly grocery shopping spending over the past five weeks.

// Create an expression that will use the items in the array to calculate the average amount spent on groceries.

// To find the total spent, we must add up the array.

var totalSpent = shoppingBills[0] + shoppingBills[1] + shoppingBills[2] + shoppingBills[3] + shoppingBills[4];

console.log(totalSpent);

// To find the average we must divide the array by the total number in it.

var average = totalSpent / 5;

console.log(average);

// Print out average and total spent over 5 weeks.

console.log(" You have spent a total of " + totalSpent + " dollars on groceries over 5 weeks. " + " That is an average of " + average + " dollars per week. ");