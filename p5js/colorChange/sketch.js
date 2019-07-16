//////////////////////
// GLOBAL VARIABLES //
//////////////////////
let red, green, blue;
let backColor = 0; 

// creates a canvas, picks random values for rgb variables
function setup() {
    createCanvas(600, 400);
    red = random(255);
    green = random(255);
    blue = random(255);

}

function mousePressed() {
    red = random(255);
    green = random(255);
    blue = random(255);

}

function draw() {
    colorMode(HSB, 300);
    backColor++;
    if(backColor >= 300) {
        backColor = 0;
        backColor++
    }
    background(backColor, 300, 300);
    colorMode(RGB);
    stroke(red, green, blue, 255);
    strokeWeight(5);
    fill(red, green, blue, 255);
    ellipse(300, 300, 400, 400);

}