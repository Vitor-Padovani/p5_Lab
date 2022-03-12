function setup() {
  createCanvas(400, 400);
  background(255, 0, 0);
  rectMode(CENTER);
}

function draw() {

  noStroke();
  fill(255);
  rect(200, 200, 65, 200);
  rect(200, 200, 200, 65);

  fill(0, 0);
  stroke(0);
  strokeWeight(50);
  rect(200, 200, 400, 400);
  
}
