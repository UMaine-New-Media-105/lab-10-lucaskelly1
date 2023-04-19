let car1
function setup() {
  createCanvas(800, 800);
  // car = [];
  addX = 5;
  car1 = new Car(200, 200, 10)
}

function draw() {
  background("grey");
  push();
  fill("black");
  rect(0, 100, 800, 200);
  fill("black");
  rect(0, 500, 800, 200);
  pop();
  // let car1 = new Car(200, 200, 10);
  car1.show();
   car1.update();
  // car1.x = car1.x + 5;
  // console.log("The values of the car is: " + car1.x + " " + car1.y)
}

class Car {
  constructor(x, y, addX) {
    this.x = x;
    this.y = y;
    this.addX = addX;
  }
  update() {
    this.x = this.x + this.addX;
    //  this.y = this.y;
    // Reverse if it hits a wall.
    //   let isTooFarLeft = (this.x < 0);
    //   let isTooFarRight = (this.x > width);
    //   if (isTooFarLeft || isTooFarRight) {
    //     this.addX = -this.addX;//spite changing direction
    //  //    this.y = random(height);
    //    }
  }
  show() {
    push();
    translate(this.x, this.y);
    strokeWeight(4);
    stroke("black");
    rect(0, 0, 100, 100);
    pop();
  }
}
