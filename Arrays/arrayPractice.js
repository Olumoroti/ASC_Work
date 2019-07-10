let foodArray = [
    "banana",
    "pizza",
    "agege",
    "apple"
];

console.log("This is the array", foodArray);

console.log("This should be undefined,", foodArray[foodArray.length]);

foodArray.push("cake");

console.log("Say cake:", foodArray[4]);

foodArray.splice(foodArray.length, 0, "sausage", "orange");

console.log("More food:", foodArray);

foodArray.splice(0, 1, "ice cream");

console.log("I never liked bananas anyways...", foodArray);

console.log("I want ice crem and piazza!", foodArray.slice(0, 2));