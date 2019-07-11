//////////////////////
// GLOBAL VARIABLES //
//////////////////////
const alphabet = "abcdefghijklmnopqrstuvwxyz";
const foods = [
    "pizza",
    "burgers",
    "rice and beans",
    "lasagna",
    "macaroni and cheese",
    "baked potatoes"
];
const students = [
    "Bob",
    "Martin",
    "Danny",
    "Mahdi",
    "Harry",
    "Sean",
    "Robert"
];
/////////////////////////////
// END OF GLOBAL VARIABLES //
/////////////////////////////


// randomNumber - should console.log a random number between 0 and 21 (exclusively)


function randomNumber() {
    let number = Math.random() * 20;
    number = Math.ceil(number);
    console.log(number);
}

randomNumber();


// randomLetter - should console.log a random letter from the alphabet
// Note: you’re given a global variable “alphabet” that you can use! Keep in mind that strings behave much like arrays - you can use indexing to access individual character. Try it out!


function randomLetter() {
    let randLetterIndex = Math.floor(Math.random() * alphabet.length);
    let randLetter = alphabet[randLetterIndex]; 
    console.log(randLetter);

}

randomLetter();


// randomFood - should console.log a random food from the “foods” array
// Note: you’re given a global variable “foods” that you can use!


function randomFood() {
    let randFoodIndex = Math.floor(Math.random() * foods.length);
    let randFood = foods[randFoodIndex]; 
    console.log(randFood);

}

randomFood();


// randomStudent - should console.log a random student from the “students” array
// Note: you’re given a global variable “students” that you can use!


function randomStudent() {
    let randStudentIndex = Math.floor(Math.random() * students.length);
    let randStudent = students[randStudentIndex]; 
    console.log(randStudent);
    
}
    
randomStudent();




// randomGroup - should console.log three random students from the “students” array
// Hint: feel free to call another function within this one!
// Note: it’s OK if the students in the group are not unique (For example: the same student can show up twice)

function randomGroup() {
   
    randomStudent(); 
    randomStudent();
    randomStudent();
    
}

randomGroup();

