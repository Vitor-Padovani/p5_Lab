var scl = 20;
let song;
var s;
var f;

function preload() {
  appl = loadSound('rupee.mp3');
  boo = loadSound('boo.mp3');
}

function setup() {
  createCanvas(500, 500);
  frameRate(7);
  noStroke(0);
  s = new snake();
  f = new food();
  f.pick_location();
}

function food() {
  this.number = 0;
  this.vector = createVector();

  this.pick_location = function() {
    this.number++;
    var cols = floor(width/scl);
    var rows = floor(height/scl);
    this.vector = createVector(floor(random(cols)), floor(random(rows)));
    this.vector.mult(scl);
  }
}

function draw() {
  background(0);
  s.update();
  s.show();

  if (s.eat(f.vector)) {
    f.pick_location();
  }

  s.death();

  fill(floor(random(255)), floor(random(255)), floor(random(255)));
  rect(f.vector.x, f.vector.y, scl);
}

function key_pressed() {
  if (keyCode == UP_ARROW) {
    s.dir(0, -1);
  } else if (keyCode == RIGHT_ARROW) {
    s.dir(1, 0);
  } else if (keyCode == DOWN_ARROW) {
    s.dir(0, 1);
  } else if (keyCode == LEFT_ARROW) {
    s.dir(-1, 0);
  }
}
