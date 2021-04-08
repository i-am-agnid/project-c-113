function preload() {
    img = loadImage('https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8cmFuZG9tfGVufDB8fDB8&ixlib=rb-1.2.1&w=1000&q=80');
}

function setup() {
    //put setup code here
    //For eg - setting canvas
    Canvas = createCanvas(400, 400);
    Canvas.center();
}

function draw() {
    image(img, 125, 125, 150, 150);
    circle(45, 45, 60);
    fill(0, 0, 200);
    stroke(50, 50, 75);
    circle(355, 45, 60);
    line(75, 50, 325, 50);
    strokeWeight(8);
    circle(45, 355, 60);
    circle(355, 355, 60);
    line(45, 75, 45, 320);
    line(75, 355, 325, 355);
    line(355, 75, 355, 325)
}