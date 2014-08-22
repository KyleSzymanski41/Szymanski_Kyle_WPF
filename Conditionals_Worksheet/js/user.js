/**
 * Created by kyleszymanski on 8/21/14.
 * conditional worksheet
 * "check the Login" - Assignment
 */

// The user name and password have already been saved to the computer.
var correctUn = "tomj1955";

var correctPw = "tj1955";

// Ask the user to verify their name and password.

var userName = prompt("What is your username?");

// console.log out input username.

console.log(userName);

var userPassword = prompt("What is your password?");

//console.log out input password.

console.log(userPassword);

// verify information entered.

if(userPassword === correctPw && userName === correctUn){
    //console.log out welcome username
    console.log("Welcome " + correctUn + "!");
}else if(userPassword === correctPw){
    // console.log out “User not found. Try again."
    console.log("User not found. Try again.");
}else{
    console.log("Password not found");
}
