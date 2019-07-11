function faveFood(food, ingredientOne, ingredientTwo, temp) {
    return "So " + food + " is your favorite food! To make this, you need " + ingredientOne + " and " + ingredientTwo + ". Cook it at " + temp + " and its done!";
}

let food = process.argv[2];
let ingredientOne = process.argv[3];
let ingredientTwo = process.argv[4];
let temp = process.argv[5];

console.log(faveFood(food, ingredientOne, ingredientTwo, temp));
