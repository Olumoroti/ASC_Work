let canvasLength, canvasHeight;
let boxLength, boxHeight;
let r, g, b;
let colorCheckRed;
let keyPress;

function setup() {
    canvasLength = 600;
    canvasHeight = 600;
    boxLength = 100;
    boxHeight = 100;

    r = 0;
    g = 0;
    b = 255;

    colorCheckRed = false;
    keyPress = 32;

    createCanvas(canvasLength, canvasHeight);
}

function colorChange() {
    if (colorCheckRed == false) {
        r = 255;
        b = 0;
        colorCheckRed = true;
    } else if (colorCheckRed == true) {
        r = 0;
        b = 255;
        colorCheckRed = false;
    }

}

function keyPressed() {
    if (keyCode == keyPress) {
        colorChange();
    }

}

function mousePressed() {
    if((mouseX >= 0 && mouseX <= boxLength) && (mouseY >= 0 && mouseY <= boxHeight)) {
        colorChange();
    }
}

function draw() {
    fill(r, g, b);
    rect(0, 0, boxLength, boxHeight);

}