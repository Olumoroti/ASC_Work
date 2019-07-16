function setup() {
    createCanvas(1000, 1000);
    background(218, 165, 32); 
    noCursor();
}

// Global Variables
let diameter = 100;


function mouseClicked({clientX, clientY}) {
    //console.log("X:", clientX, "and Y:", clientY);
    if(clientX <= diameter && clientY <= diameter) {
        console.log("In Circle.");
    } else {
        console.log("Out of Circle.");
    }
}


function draw() {
    background(218, 165, 32); 

    //click circle
    noStroke();
    fill(200, 100, 150);
    circle(50, 50, diameter);

    //mouse pointers
    fill(0);
    strokeWeight(0.5);
    ellipse(mouseX, mouseY, 5, 5);    
}