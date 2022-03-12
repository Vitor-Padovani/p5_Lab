var scl = 10;
var s;

function setup() {
  createCanvas(400, 400);
  s = new snake();
}

function draw() {
  frameRate(10);
  background(127);
  s.update();
  s.show();
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

function snake() {
  this.x = 0;
  this.y = 0;
  this.x_speed = 1;
  this.y_speed = 0;

  this.dir = function(x, y) {
    this.x_speed = x;
    this.y_speed = y;
  }

  this.update = function() {
    key_pressed();
    this.x = this.x + this.x_speed*scl;
    this.y = this.y + this.y_speed*scl;

    this.x = constrain(this.x, 0, width-scl);
    this.y = constrain(this.y, 0, height-scl);
  }

  this.show = function() {
    fill(255);
    rect(this.x, this.y, 10, 10);
  }
}
