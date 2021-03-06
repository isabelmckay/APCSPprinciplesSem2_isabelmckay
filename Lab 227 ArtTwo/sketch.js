//  Global variables
var b1;
var balls = [];

// put setup code here
function setup() {
  var cnv = createCanvas(1200, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(20,20,20);
 b1 = new Ball (createVector(width/2, height/2), createVector(0,0),
                25,
                color(244, 66, 131));
  loadBalls(3);  //  !!!!!!!!!!  this is a function call
}

function draw() {
    background(20,20,20,22);
    b1.run();
   for (var i = 0; i < balls.length; i++){
    balls[i].run();
  }
}

function loadBalls(numBalls){
    for(var i = 0; i < numBalls; i++){
        var loc = createVector(random(width), random(height));
        var vel = createVector(random(-3,3), random(-3,3));
        var rad = random(400, 500);
        var col = color(244, 66, 131);
        balls.push(new Ball(loc, vel, rad, col));
    }
    console.log(balls);
}
