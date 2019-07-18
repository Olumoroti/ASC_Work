let canvasLength, canvasHeight;
let gridBoxLength, gridBoxHeight, gridBoxX, gridBoxY;
let defaultColor;
let gridArray;
let gridPieceX, gridPieceY, gridPieceColor;


function setup() {

    canvasLength = 400;
    canvasHeight = 400;

    gridBoxLength = canvasLength/10;
    gridBoxHeight = canvasHeight/10;

    defaultColor = "white";

    gridArray = [];

    createCanvas(canvasLength, canvasHeight);

    makeGridArray();
}



function draw() {

    makeGrid();

}



function makeGridArray() {
    for (gridBoxY = 0; gridBoxY < canvasHeight; gridBoxY += gridBoxHeight) {
        for(gridBoxX = 0; gridBoxX < canvasLength; gridBoxX += gridBoxLength) {
            let gridArrayTwo = [];
            gridArrayTwo[0] = gridBoxX;
            gridArrayTwo[1] = gridBoxY;
            gridArrayTwo[2] = defaultColor; 
            gridArray.push(gridArrayTwo);
        }
    }
}

function makeGrid() {
    for (let i = 0; i < gridArray.length; i++) {
        fill(gridArray[i][2]);
        rect(gridArray[i][0], gridArray[i][1], gridBoxLength, gridBoxHeight);
    }
        
}

function mousePressed() {
    for (let i = 0; i < gridArray.length; i++){
        gridPieceX = gridArray[i][0];
        gridPieceY = gridArray[i][1];
        gridPieceColor = gridArray[i][2];

        if (mouseX > gridArray[i][0] && mouseX < gridArray[i][0] + gridBoxLength && mouseY > gridArray[i][1] && mouseY < gridArray[i][1] + gridBoxHeight) {
            if (gridArray[i][2] == 'white') {
                gridArray[i][2] = 'blue';
            } else if (gridArray[i][2] == 'blue') {
                gridArray[i][2] = 'white';
            }
        }
    }
}