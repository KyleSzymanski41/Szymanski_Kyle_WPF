/**
 Kyle Szymanski
 8/21/14.
 Assignment-Conditionals
 WPF-WDD 144- section 02
 */

// The user is the president of a development company. The company runs on a specific budget of 5,000 a week.
// The user needs to find out if his total cost is less than, greater than, or equal to his budget before his big government loan of kicks in.
// The users fixed cost is based on his electric bill, rent, and insurance costs.

// Ask the user how much his fixed costs are in dollars.

// Ask the user for their electric bill.

var electric = prompt("How much is your electric bill in dollars?");

if(electric === ""){// If the user does not enter a value, prompt again.
    electric = prompt("In dollar amount how much is your electric bill?");
}

// Otherwise validate prompt.

console.log(electric);

// Ask the user for their rent they have to pay.

var rent = prompt("How much is your rent for the building?");

if(rent === ""){ // If the user does not enter a value, prompt again.
    rent = prompt("How much is your rent for the building?");
}

// Otherwise validate response.

console.log(rent);

// Ask the user for their insurance cost.

var insurance = prompt("How much do you pay in insurance?");

// console.log out response

console.log(insurance);

// To figure out their total fixed cost add the 3 together.

var fixedCost = parseInt(electric) + parseInt(rent) + parseInt(insurance);

// console.log out answer.

console.log(parseInt(fixedCost));

// In order to find his total cost we need to find out how many employees the user has and what their average wage is.
// Ask the user how many employees are on his staff.

var employees = prompt("How many people do you currently employee?");

// console.log out response.

console.log(employees);

// Ask the user for the employees average wage per week.

var wage = prompt("What is the average wage per employee per week?");

// console.log out response.

console.log(wage);

// To find total cost, multiply wage, employees, and fixed cost together.

var totalCost = fixedCost + (employees * wage);

// console.log out answer.

console.log(totalCost);

// The company has a big bonus from the government. This is a true statement.

var govBonus = true;

// The company is based on a 5,000 dollar a week budget.

var budget = 5000;


