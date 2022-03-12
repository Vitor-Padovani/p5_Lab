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
        appl.play();
        document.getElementById('length').innerHTML = this.total;
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
            boo.play()
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
  