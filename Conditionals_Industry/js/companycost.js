/**
 Kyle Szymanski
 8/21/14.
 Assignment-Conditionals
 WPF-WDD 144- section 02
 */

// The user is the president of a development company. The company runs on a specific budget of 5,000 a week.
// The user needs to find out if his total cost is less than, greater than, or equal to his budget before his government loan kicks in.
// The users fixed cost is based on his electric bill, rent, and insurance costs.

// Ask the user how much his fixed costs are in dollars.

// Ask the user for their electric bill.

var electric = prompt("How much is your electric bill in dollars?");

if(electric === ""){// If the user does not enter a value, prompt again.
    electric = prompt("In dollar amount how much is your electric bill?");
}

// Otherwise validate prompt.

console.log(electric);


