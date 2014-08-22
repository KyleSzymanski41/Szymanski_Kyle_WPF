/**
 * Created by kyleszymanski on 8/21/14.
 */

// ask the user what the temperature is outside.

var temp = prompt("What is temperature outside in degrees? ");

if(temp === ""){
    temp = prompt("What is the current temperature in degrees?");
}

console.log(temp);


var F = parseInt(temp * 9) / 5 + 32;

var C = parseInt(temp - 32) * 5 / 9;

console.log(parseInt(C);

if(temp === C){
    console.log( "The temperature is " + C + " degrees Celsius.");
}else{
    console.log("The temperature is " + F + " degrees F.")
}


console.log(" Your temperature in celcius is " + C + " and your temperature in ferhenhieght is " + tempF + ".");

