var scl = 20;
var s;

function setup() {
  createCanvas(500, 500);
  frameRate(10);
  noStroke(0);
  s = new snake();
  pick_location();
}

function pick_location() {
  var cols = floor(width/scl);
  var rows = floor(height/scl);
  food = createVector(floor(random(cols)), floor(random(rows)));
  food.mult(scl);
}

function draw() {
  background(127);
  s.update();
  s.show();

  if (s.eat(food)) {
    pick_location();
  }

  s.death();

  fill(255, 0, 0);
  rect(food.x, food.y, scl);
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
  this.total = 0;
  this.tail = []

  this.eat = function(pos) {
    var d = dist(this.x, this.y, pos.x, pos.y);
    if (d < 1) {
      this.total++;
      return true
    } else {
      return false
    }
  }

  this.dir = function(x, y) {
    this.x_speed = x;
    this.y_speed = y;
  }

  this.death = function() {
    for (var i = 0; i < this.tail.length; i++) {
      var snakeNode = this.tail[i];
      var distance = dist(this.x, this.y, snakeNode.x, snakeNode.y)
      if (distance < 1) {
        this.total = 0;
        this.tail = [];
      }
    }
  }

  this.update = function() {
    for (var i = 0; i < this.tail.length-1; i++) {
      this.tail[i] = this.tail[i+1]
    }
    this.tail[this.total-1] = createVector(this.x, this.y);

    key_pressed();
    this.x = this.x + this.x_speed*scl;
    this.y = this.y + this.y_speed*scl;

    this.x = constrain(this.x, 0, width-scl);
    this.y = constrain(this.y, 0, height-scl);
  }

  this.show = function() {
    fill(255);
    for (var i = 0; i < this.total; i++) {
      rect(this.tail[i].x, this.tail[i].y, scl);
    }
    rect(this.x, this.y, scl);
  }
}
