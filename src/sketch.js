// Purple Rain
// (138, 43, 226)
// (230, 230, 250) background
 
let drops = 200;
let d = [];

function setup() {
  createCanvas(640, 360);

  class Drop {
    constructor() {
      this.x = random(0, width);
      this.y = random(-500, -100);
      this.z = map(pow(random(0, 20), 10), 0, pow(20, 10), 0, 20);
      this.length = map(this.z, 0, 20, 10, 20);
      this.yspeed = map(this.z, 0, 20, 4, 10);
    }

    fall() {
      this.y = this.y + this.yspeed;
      this.grav = map(this.z, 0, 20, 0, 0.2);
      this.yspeed = this.yspeed + this.grav;

      if (this.y > height) {
        this.x = random(0, width);
        this.y = random(-200, -100);
        this.z = map(pow(random(0, 20), 10), 0, pow(20, 10), 0, 20);
        this.length = map(this.z, 0, 20, 10, 20);
        this.yspeed = map(this.z, 0, 20, 4, 10);
        
      }
    }

    show() {
      this.thick = map(this.z, 0, 20, 1, 3);
      strokeWeight(this.thick);
      stroke(138, 43, 226);
      line(this.x, this.y, this.x, this.y + this.length);
    }
  }

  for (let x = 0; x < drops; x++) {
    drop = new Drop;
    d.push(drop);
  }
}

function draw() {
  background(230, 230, 250);

  for (let i = 0; i < drops; i++) {
    d[i].fall();
    d[i].show();
  }
  
}

