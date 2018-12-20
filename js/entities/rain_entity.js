var acceleration = 0.0098;

export default class rain_entity {
  constructor(){
    this.nDrops = 1000;
    this.drops = [];

    for (var i = 0; i < this.nDrops; i++) {
      this.drops.push(new Drop());
    }
  }

  render() {
    this.drops.forEach(function(d) {
      d.drawAndDrop();
    });
  }
}

function Drop() {
  this.initX = function() {
    this.x = random() * width;
  };
  this.initY = function() {
    this.y = -random() * height / 3; // Initialise rain somewhat off the screen
  };

  this.initX();
  this.y = random() * height;

  this.length = random() * 10;
  this.speed = random();

  this.drawAndDrop = function() {
    this.draw();
    this.drop();
  };

  this.draw = function() {
    window.p5.line(this.x, this.y, this.x, this.y + this.length);
  };

  this.drop = function() {
    if (this.y < height) {
      this.y += this.speed;
      this.speed += 0.0098;
    } else {
      this.speed = random();
      this.initY();
      this.initX();
    }
  };
}
