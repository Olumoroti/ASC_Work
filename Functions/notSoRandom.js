// Inside of this file, create the following 5 functions:
// random - takes 1 number argument and console.logs a random integer between 0 and the given number (exclusively)


function random(number) {
    numberRand = Math.random() * number;
    numberRand = Math.floor(numberRand);
    console.log("The random number from 0 to", number, "is", numberRand + ".");

}


random(10); // 4
random(100); // 78
random(2); // 0



// randomLetter - takes 1 string argument and console.logs a random letter from the given string

function randomLetter(word) {
    let randLetterIndex = Math.floor(Math.random() * word.length);
    let randLetter = word[randLetterIndex]; 
    console.log(randLetter, "is a random letter from", word);

}


randomLetter("blah"); // “b”
randomLetter("abcdefg"); // “g”
randomLetter("z"); // “z”



// myGuy - takes 1 string argument and console.logs the same string with “, my guy.” at the end of it


function myGuy(string) {
    console.log(string + ", my guy.");

}


myGuy("Take it easy"); // “Take it easy, my guy”



// string_N_times - takes 2 arguments, a string and a number, and console.logs the string as many times as the given number


function string_N_times(string, number){
    for(let i = 0; i < number; i++) {
        console.log(string);
    }

}

string_N_times("bananaayeaye", 6);


// hypotenuse - takes 2 number arguments (corresponding to the perpendicular sides of a right triangle) and console.logs the length of the 3rd side, the hypotenuse.
// NOTE: don’t worry about the math! Here’s the equation and some links to helpful functions in JavaScript


function hypotenuse(legOne, legTwo) {
    legOne = Math.pow(legOne, 2);
    legTwo = Math.pow(legTwo, 2);
    let hypotenuseOne = Math.sqrt(legOne + legTwo);
    console.log(hypotenuseOne);
}


// Math.pow()
// Math.sqrt()
hypotenuse(3,4); // 5
hypotenuse(5,12);
