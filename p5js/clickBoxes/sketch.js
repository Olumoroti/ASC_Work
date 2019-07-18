let canvasLength, canvasHeight;
let boxOneLength, boxOneHeight, boxOneX, boxOneY, boxOneRed, boxOneGreen, boxOneBlue, boxOneCheck;
let boxTwoLength, boxTwoHeight, boxTwoX, boxTwoY, boxTwoRed, boxTwoGreen, boxTwoBlue, boxTwoCheck;

function setup() {
    canvasLength = 600;
    canvasHeight = 600;


    boxOneLength = 100;
    boxOneHeight = 100;
    boxOneX = 0;
    boxOneY = 0;
    boxOneColor = 'blue';
    boxOneCheck = false;


    boxTwoLength = 100;
    boxTwoHeight = 100;
    boxTwoX = 300;
    boxTwoY = 0;
    boxTwoColor = 'blue';
    boxTwoCheck = false;


    createCanvas(canvasLength, canvasHeight);


}



function changeBoxColor(x, y, length, height, color) {
    if(mouseX >= x && mouseX <= (x + length) && mouseY >= y && mouseY <= (y + height)) {
        if (color == "blue") {
            color = "red";

        } else if (color == "red") {
            color = "blue";

        }
    }
}




function mousePressed() {
    if(mouseX >= boxOneX && mouseX <= boxOneX + boxOneLength && mouseY >= boxOneY && mouseY <= boxOneY + boxOneHeight)  {
        if (boxOneColor == "blue") {
            boxOneColor = "red";

        } else if (boxOneColor == "red") {
            boxOneColor = "blue";

        }
    }

    if(mouseX >= boxTwoX && mouseX <= boxTwoX + boxTwoLength && mouseY >= boxTwoY && mouseY <= boxTwoY + boxTwoHeight)  {
        if (boxTwoColor == "blue") {
            boxTwoColor = "red";

        } else if (boxTwoColor == "red") {
            boxTwoColor = "blue";

        }
    }
}

function draw() {

    fill(boxOneColor);
    rect(boxOneX, boxOneY, boxOneLength, boxOneHeight);

    fill(boxTwoColor);
    rect(boxTwoX, boxTwoY, boxTwoLength, boxTwoHeight);

    changeBoxColor(boxOneX, boxOneY, boxOneLength, boxOneHeight, boxOneColor);
    changeBoxColor(boxTwoX, boxTwoY, boxTwoLength, boxTwoHeight, boxTwoColor);


}
