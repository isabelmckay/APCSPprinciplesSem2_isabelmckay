//Global variables
var Balls = [];
var paddle;
var score = 0;
//var start = "false";
// setting up background
function setup(){
  var cnv = createCanvas(1000, 1000);
  cnv.position((windowWidth-width)/2, 30);
  img = loadImage("popcornimg.png");
  img2 = loadImage("usethisbucket.png");
 background (20, 20, 20);
  // telling how many balls
  numBalls = 100;
  loadBalls(numBalls);
  // display the image after loading
//loadImage('imguse.jpg', img => {
//image(img, 0, 0);
//});


  //lerping

  var loc = createVector(400, 550)
  var vel = createVector(0, 0);
  var width = 250;
  var length = 20;
  var col = color(random(0, 255), random(0, 255), random(0, 255))
  paddle = new Paddle(loc, vel, width, length, col);
}

//loading balls

function loadBalls(numBalls){
  for(var i = 0; i < numBalls; i++){
    // telling the balls where to go
    var loc = createVector(random(100, 600), 20);
    var vel = createVector(random(-5, 5), random(-5, 5));
    var rad = 25
    var col = color(random(0, 255), random(0, 255), random(0, 255));
    var sp = 3
    var b = new Ball(loc, vel, rad, col, sp);
    //pushing balls
    Balls.push(b);
  }
}

// function gameStart(){
//   if(start == "true"){
//     textFont();
//     fill(200, 200, 200);
//     textAlign(CENTER);
//     textSize(100);
//     text("ARE YOU READY", 400, 300);
//     textSize(25);
//     text("Press any arrow to start", 400, 550);
//     fill(207, 130, 255);
//   }
// }

//drawing balls and running paddle
function draw(){
// background(20, 20, 20, 6000);
//image(img, 0, 0);
loadImage('imguse.jpg', img => {
image(img, 0, 0);
});
//gameStart();
  //making score
  textSize(32);
  fill(0, 0, 0);
  text(score, 500, 450)
//  image(img, 0, 0);
  // removing the outline
  noStroke();
  paddle.run();
  for(var i = 0; i < Balls.length; i++){
    Balls[i].run();
    var aBalls = Balls[i];
    //splicing the balls
    if(aBalls.sp == 1){
      Balls.splice(i,1);
      // making the score acrtually work
      score = score + 1;
    }
    // resetting balls
    if(aBalls.sp == 2){
      //amount of balls in the next reset
      var numBalls = Balls.length + 5;
      Balls = []
      loadBalls(numBalls)
      for(var i = 0; i < Balls.length; i++){
        Balls[i].run;
      }
    }
  }
  //  image(img, 0, 0);
}
