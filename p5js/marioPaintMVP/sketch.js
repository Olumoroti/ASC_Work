let canvasWidth = 500;
let canvasHeight = 500;
let checkShape = "ellipse";

function setup() {
    createCanvas(canvasWidth, canvasHeight);
    background(20);
}

function mouseClicked () {
    if((mouseX >= 50 && mouseX <= 130) && (mouseY >= 450 && mouseY <= 480)) {
        checkShape = "rect";
    } else if((mouseX >= 370 && mouseX <= 455) && (mouseY >= 445 && mouseY <= 480)) {
        checkShape = "ellipse";
    }  else if((mouseX >= 200 && mouseX <= 300) && (mouseY >= 400 && mouseY <= 500)) {
        background(0);
    }

}

function mouseDragged() {
    let pointerWidth = random(10, 50);
    let pointerHeight = random(10, 50);
    let pointerDiameter = random(10, 50);

    noStroke();
    fill(255);
    if(checkShape == "ellipse") {
        ellipse(mouseX, mouseY, pointerWidth, pointerHeight);
    } else if (checkShape == "rect") {
        rectMode(CENTER);
        rect(mouseX, mouseY, pointerWidth, pointerHeight);
        rectMode(CORNER);
    }
    //circle(mouseX, mouseY, pointerDiameter);
}



function draw() {
    fill(200);
    stroke(255, 50, 50, 50);
    strokeWeight(2);

    rect(50, 450, 80, 30);
    ellipse(412.5, 462.5, 85, 35);

    fill(255, 0, 0);
    ellipse(canvasWidth/2, 450, 50, 50);


}
