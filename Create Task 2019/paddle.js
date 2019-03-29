/*
** Paddle Constructor Function
** Isabel McKay
** Aug 21, 2018
*/

function Paddle(loc, vel, width, length, col){
  // Instance variables
  this.loc = loc;
  this.vel = vel;
  this.w = width;
  this.l = length;
  this.col = col;
  // calling other functions
  this.run = function(){
    this.checkEdges();
    this.update();
    this.render();
  }
// lerping
  this.update = function(){
    //paddle lerps to the middle rather than a corner
    paddleLength = width/2
    this.loc.x = lerp(this.loc.x, mouseX-paddleLength, .15)
  }
  // reverses speed when rectangle touches an edge
  this.checkEdges = function(){
    if(this.loc.x < 0) this.vel.x = -this.vel.x;
    if(this.loc.x > width) this.vel.x = -this.vel.x;
    if(this.loc.y < 0) this.vel.y = -this.vel.y;
    if(this.loc.y > height) this.vel.y = -this.vel.y;
  }

  //drawing paddle at new location
  this.render = function(){
    fill(this.col);
  image(img2, this.loc.x, this.loc.y, 300, 300);
  }
}
