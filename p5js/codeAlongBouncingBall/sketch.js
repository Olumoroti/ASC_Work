let canvasLength, canvasHeight;
let ballX, ballY, ballSize, ballRadius;
let direction = [true, false];
let xModDirection = direction[0];


function setup() {
    canvasLength = 600;
    canvasHeight = 600;

    ballX = 20;
    ballY = 20;
    ballSize = 30;
    ballRadius = ballSize/2;

    createCanvas(600, 600);
}


function drawCircle() {
    circle(ballX, ballY, ballSize); 

    if (ballX <= canvasLength - ballRadius && xModDirection == true) {
        ballX++;
    } else if (ballX >= ballRadius && xModDirection == false) {
        ballX--;
    }

    if (ballX == canvasLength - ballRadius) {
        xModDirection = direction[1];
    } else if (ballX == ballRadius) {
        xModDirection = direction[0];
    }
}


function draw() {
    background(40, 255, 255);
    drawCircle();
}

