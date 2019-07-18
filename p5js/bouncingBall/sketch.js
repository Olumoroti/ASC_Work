let canvasLength = 500;
let canvasHeight = 500;
let ballSize = 50;
let moveModX = 1;
let moveModY = 1;
let ballX; 
let ballY;
let r, g, b;
let d;
let speed;



function setup() {
    createCanvas(canvasLength, canvasHeight);
    ballX = random(ballSize/2, canvasLength - ballSize/2);
    ballY = random(ballSize/2, canvasHeight - ballSize/2);
    r = 100;
    g = 100;
    b = 100;
}

function draw() {
    d = dist(mouseX, mouseY, ballX, ballY);
    background(120);
    fill(r, g, b);
    ellipse(ballX, ballY, ballSize, ballSize);
    if(ballX >= canvasLength - ballSize/2 || ballX <= ballSize/2) {
        moveModX *= -1.1;

    }
    if(ballY >= canvasHeight - ballSize/2 || ballY <= ballSize/2) {
        moveModY *= -1.1;
    }
    ballX += moveModX;
    ballY += moveModY;
}

function mouseClicked() {
    if(d <= ballSize/2) {
        r = random(255);
        g = random(255);
        b = random(255);
    }
}