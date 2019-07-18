let canvasLength, canvasHeight;
let playerHealth, playerAttack;
let computerHealth, computerAttack;
let attackBoxX, attackBoxY, attackBoxLength, attackBoxHeight, attackOneText;
let cooldownText;
let turn;
let winTextSize;

function setup() {
    canvasLength = 600;
    canvasHeight = 600;

    playerHealth = 100;
    playerAttack = 10;

    computerHealth = 100;
    computerAttack = random(5, 15);

    attackBoxX = 445;
    attackBoxY = 360;
    attackBoxLength = 150;
    attackBoxHeight = 50;
    attackOneText = 'ATTACK';

    cooldownText = 'Enemy is attacking...';

    turn = "player";

    createCanvas(canvasLength, canvasHeight);



}

function draw() {
    background(200, 100, 40);
    strokeWeight(1);

    // health bars
    fill(120); //grey
    rect(50, 520, 150, 20); //player health bar area
    rect(15, 15, 150, 20); //computer health bar area
    fill(0, 120, 0); //green
    rect(50, 520, playerHealth * 1.5, 20); //player health bar
    rect(15, 15, computerHealth * 1.5, 20); //computer health bar

    fill(255, 0, 0); //red
    rect(attackBoxX, attackBoxY, attackBoxLength, attackBoxHeight); //attack button
    fill(0);
    textAlign(CENTER, CENTER);
    text(attackOneText, attackBoxX + 74, attackBoxY + 27);


    // player's xp bar
    fill(0, 0, 255); //blue
    rect(50, 500, 150, 10);

    //player's pokemon
    fill(100, 150, 200); //blue  
    rect(240, 360, 200, 200); //portrait box
    fill("red");

    //player's pokemon
    triangle(355, 391, 345, 411, 365, 411); 
    triangle(385, 391, 375, 411, 395, 411);
    ellipse(370, 430, 40, 40); 
    rect(290, 442, 100, 50);
    rect(295, 490,20,45);
    rect(365, 490, 20, 45);

    
    // fill(255,0,0);
    // rect(450,360,150,50);
    // fill(255,0,0);
    // rect(450,412,150,50);
    // fill(255,0,0);
    // rect(450,464,150,50);
    // fill(255,0,0);
    // rect(450,515,150,50);

    // opponent's pokemon  
    fill(100, 150, 200); //blue
    rect(362, 20, 200, 200); 

    //opponent's pokemon
    fill("yellow");
    ellipse(448, 75, 15, 35);
    ellipse(470, 75, 15, 35);
    ellipse(455, 92, 40, 40);
    ellipse(455, 135, 40, 60);
    ellipse(465, 167, 20, 10);
    ellipse(445, 167, 20, 10);
    triangle(475, 155, 475, 138, 492, 132);

    // pokeballs
    fill(220, 0, 0);
    ellipse(28, 55, 30, 30);
    ellipse(65, 55, 30, 30);
    ellipse(103, 55, 30, 30);
    ellipse(140, 55, 30, 30);
    ellipse(175, 55, 30, 30);
    ellipse(210, 55, 30, 30);

    checkHealth();


}

let compAttack = function compAttack() {
    if(turn == 'computer') {
        playerHealth -= computerAttack;
        turn = 'player';
    }
}

function mousePressed() {
    if(mouseX >= attackBoxX && mouseX <= attackBoxX + attackBoxLength && mouseY >= attackBoxY && mouseY <= attackBoxY + attackBoxHeight && turn == 'player') {
        computerHealth -= playerAttack;
        turn = 'computer';
        setTimeout(compAttack, 2000);
    }
}

function checkHealth() {
    if(playerHealth <= 0) {
        noLoop();
        playerHealth = 0;
        playerAttack = 0;
        winText = 100;
        fill(0);
        textSize(winTextSize);
        text("Computer Wins!", canvasLength/3, canvasHeight/2);
        setTimeout(refresh, 3000);
        
    } else if(computerHealth <= 0) {
        noLoop();
        computerHealth = 0;
        computerAttack = 0;
        winText = 100;
        fill(0);
        textSize(winTextSize);
        text("Player Wins!", canvasLength/2, canvasHeight/2);
        setTimeout(refresh, 3000);
    }

}

let refresh = function refresh() {
    loop();
    playerHealth = 100;
    computerHealth = 100;
    computerAttack = random(5, 15);
    playerAttack = 10;
    turn = 'player';
}

    




