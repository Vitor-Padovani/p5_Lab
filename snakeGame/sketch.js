var scl = 20;
let mking;
let playbackRate = 1;
var fps = 7;

function preload() {
  appl = loadSound('rupee.mp3');
  mking = loadSound('mking.mp3');
}

function setup() {
  createCanvas(500, 500);
  noStroke(0);
  s = new snake();
  f = new food();
  f.pick_location();
  mking.loop();
}

function fpsIncrease(value) {
  if (value > 0) {
    fps += value;
  } else {
    fps = 7;
  }
  fps = constrain(fps, 7, 24)
  document.getElementById('fps').innerHTML = fps;
}

function musicVel(value) {
  if (value > 0) {
    playbackRate += value;
  } else {
    playbackRate = 1;
  }

  playbackRate = constrain(playbackRate, 1, 2)
  mking.rate(playbackRate);
  document.getElementById('musicRate').innerHTML = playbackRate;
}

function food() {
  this.number = 0;
  this.vector = createVector();

  this.pick_location = function() {
    this.number++;
    var cols = floor(width/scl);
    var rows = floor(height/scl);
    this.vector = createVector(floor(random(1, cols-1)), floor(random(1, rows-1)));
    this.vector.mult(scl);
  }
}

function draw() {
  frameRate(fps);
  background(0);
  s.update();
  s.show();

  if (s.eat(f.vector)) {
    f.pick_location();
  }

  s.death();

  fill(floor(random(255)), floor(random(255)), floor(random(255)));
  // fill(255, 0, 0);
  rect(f.vector.x, f.vector.y, scl);
}

function key_pressed() {
  if (((keyCode == UP_ARROW) | (keyCode == 87)) & (s.y_speed < 1)) {
    s.dir(0, -1);
  } else if (((keyCode == RIGHT_ARROW) | (keyCode == 68)) & (s.x_speed > -1)) {
    s.dir(1, 0);
  } else if (((keyCode == DOWN_ARROW) | (keyCode == 83)) & (s.y_speed > -1)) {
    s.dir(0, 1);
  } else if (((keyCode == LEFT_ARROW) | (keyCode == 65)) & (s.x_speed < 1)) {
    s.dir(-1, 0);
  }
}
