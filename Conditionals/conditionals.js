///////////////
// BACKSTORY //
///////////////
// You're an android in an unforgiving world where humans rule.
// Your decisions now will affect the world later.
// What choices will you make?
// This is totally NOT a rip off from a popular 2018 game.

///////////////////////////////
// BASIC "IF/ELSE" STATEMENT //
///////////////////////////////
// Create a variable "username" and set it equal to the user's
// third command line argument when calling 'node conditional.js'
// If "username" is defined, console.log(`Hello, ${username}`)
// Otherwise, console.log("You must provide a username");
// HINT: you can check if a variable is defined by using it
// as a condition. Ex. if(someVariable){...}
// Test to make sure the script is working as intended. Save this file
// and in the command line execute 'node conditional.js'
// Then try 'node conditional.js Marcus'


let username = process.argv[2];

if (username != undefined) {
    console.log("Hello,", username + ".");
} else {
    console.log("You must provide a username.");
}


/////////////////////////////////
// "IF/ELSE IF/ELSE" STATEMENT //
/////////////////////////////////


console.log("You find yourself in a store shopping...");


// Create a variable "health" and set it equal to 100
// Create a variable "money" and set it equal to 100


let health = 100;
let money = 100;


// Create a variable "item" and set it equal to the user's second command
// line argument


let item = process.argv[3];


// If "item" is "jacket", subtract 40 from "money" and add 20 to "health" and console.log("You bought a jacket");
// else if "item" is "candy", subtract 10 from "money" and console.log("You bought candy");
// else if "item" is "paint", subtract 30 from "money" and console.log("You bought paint");
// else if "item" is "hammer", subtract 70 from "money" and console.log("You bought a hammer");
// else console.log "You bought nothing"


if (item == "jacket") {
    money -= 40;
    health += 20;
    console.log("You bought a jacket.");

} else if (item == "candy") {
    money -= 10;
    console.log("You bought candy."); 

} else if (item == "paint") {
    money -= 30;
    console.log("You bought paint."); 

} else if (item == "hammer") {
    money -= 70;
    console.log("You bought a hammer.");

} else {
    console.log("You bought nothing.");

}

console.log("You have", money, "dollars left.");


// console.log(`You have ${money} dollars left.`);

// Test to make sure the script is working as intended.

///////////////////////
// BOOLEAN OPERATORS //
///////////////////////
console.log("You exit the store and find yourself in the middle of an anti-android protest!");
console.log("You could run or stay...");

//This is called A ternary operator! It's a shorthand if/else statement.
const randomPerson = Math.random() > .5 ? "John" : "Felipe"; 
// The syntax of it is:
// condition ? expressionIfTrue : expressionIfFalse;
// All that's being done is we're just setting the variable randomPerson equal to the outcome of that ternary statement, in this case what is the condition being tested?

// You're given a variable "randomPerson" that is a string
// NOTE: 
// We'll discuss Math.random() later this week!
// If you're interested to know more about ternary operators, google "JS ternary operator"! (Not now though, it's project time! :D)

// Create a variable "choice" and set it equal to the user's third
// command line argument


let choice = process.argv[4];
let message = process.argv[5];


// If "choice" is NOT defined (recall how we did this with the "username" variable)
//      - console.log("You shut down due to inactivity and get robbed of all your money");
//      - reduce "money" to 0
// Else if "choice" is NOT "run" AND "randomPerson" is "Felipe" 
//      console.log("The protesters attack you...");
//      - if "item" is NOT "jacket"
//          - console.log("...but Felipe, a fellow android shows up to help you escape them");
//      - else
//          - console.log("...and Felipe, a fellow android, who would normally help doesn't recognize you with the jacket");
//          - reduce "health" by 50
// Else if "choice" is "run" AND "randomPerson" is "John" 
//      - console.log("You run, but John, a human officer with an attitude and a heart of gold, finds you...");
//      - if "item" is "hammer" OR "jacket"
//          - console.log("...and holds you for questioning for suspicious activity");
//          - reduce "money" to 0
//      - else
//          - console.log("...and seeing you have no ill intent, John protects you from the protestors and lets you go.");
// Else (technically this means you ran AND got Felipe OR didn't run AND got John)
//      - if "item" is "paint"
//          - console.log("You boldy protest by painting a pro-android message...");
//          - create a variable "message" and set it equal to the user's fourth command line argument
//          - if "message" is defined
//              - console.log(`..."${message.toUpperCase()}""`);
//          - else
//              - console.log(`..."WE ARE ALIVE"`);
//      - else
//          - console.log(`Nothing interesting happens, but at least you got that ${item}`);


if (choice == undefined) {
    console.log("You shut down due to inactivity and get robbed of all your money.");
    money = 0;

} else if (choice != "run" && randomPerson == "Felipe") {
    console.log("The protesters attack you...");

    if (item != "jacket") {
        console.log("...but Felipe, a fellow android shows up to help you escape them.");

    } else {
        console.log("...and Felipe, a fellow android who would normally help you, doesn't recognize you with the jacket.");
        health -= 50;
  
    }

} else if (choice == "run" && randomPerson == "John") {
    console.log("You run, but John, a human officer with an attitude and a heart of gold, finds you...");

    if (item == "hammer" || item == "jacket") {
        console.log("...and holds you for questioning for suspicious activity.");
        money = 0;
        
    } else {
        console.log("...and seeing you have no ill intent, John protects you from the protestors and lets you go.");

    }

} else {

    if (item == "paint") {
        console.log("You boldy protest by painting a pro-android message...");

        if (message != undefined) {
            console.log(`..."${message.toUpperCase()}"`);

        } else {
            console.log(`..."WE ARE ALIVE"`);

        }

    } else {
        console.log(`Nothing interesting happens, but at least you got that ${item}.`);

    }

}



///////////
// SCOPE //
///////////

// We'll see scope play a larger role when we talk about functions,
// but any time there are curly brackets, the space in between the 
// brackets have their own scope, meaning variables defined inside of
// that scope are inaccessible to the world outside of those brackets

// Create a variable "score" and set it equal to 0
// Add "money" and "health" to "score"
// If "choice" is defined, add 10 points to "score"
// NOTE: Recall where "choice" was initialized (created). What scope was it in?
// The global scope! So all of your code has access to it.
// if "message" is defined, add 10 points to "score"
// NOTE: Recall where "message" was initialized/created. 
// It's within curly brackets! 
// Alter your code so that "message" is initialized  in the global space 
// right alongside "choice"


let score = 0;

score += money + health;

if (choice != undefined) {
    score += 10;

}

if (message != undefined) {
    score += 10;

}




//////////////////////
// STORY CONCLUSION //
//////////////////////
// console.log("The end");
// console.log(`Score: ${score}`);

console.log("The end.");
console.log(`Score: ${score}.`);