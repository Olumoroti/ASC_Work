let x = 50;
let y = 50;
let r = 0;
let g = 255;
let b = 125;

function setup() {  
    fill(0);
    stroke(255, 0, 0);
    strokeWeight(2);
    ellipse(x, y, 80, 80);

}

function draw() {
    if(r == 255) {
        r = 0;
    }
    if(g == 255) {
        g = 0;
    }
    if(b == 255) {
        b = 0;
    }
    r++;
    g+=2;
    b+=3;

    fill(r, g, b);
    ellipse(x, y, 80, 80);
}

