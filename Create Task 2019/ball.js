/*
** Ball Constructor Function
** Isabel McKay
** Aug 21, 2018
*/
//creating balls
function Ball(loc, vel, rad, col, sp){
  // Instance variables
  this.loc = loc;
  this.vel = vel;
  this.rad = rad;
  this.col = col;
  this.sp = sp;
  //calling other functions
  this.run = function(){
    this.checkEdges();
    this.update();
    this.render();
    this.checkPaddle();
  }
  //changing location of ball
  //adding speed
  this.update = function(){
    this.loc.x = this.loc.x + this.vel.x;
    this.loc.y = this.loc.y + this.vel.y;
  }
  //reversing speed when ball touches an edge
  this.checkEdges = function(){
    if(this.loc.x < 0) this.vel.x = -this.vel.x;
    if(this.loc.x > width) this.vel.x = -this.vel.x;
    if(this.loc.y < 0) this.vel.y = -this.vel.y;
    if(this.loc.y > height) this.vel.y = -this.vel.y;
  }

  //drawing ball at new location
  this.render = function(){
    fill(this.col);
    image(img, this.loc.x, this.loc.y, 200, 200);
  }

  //checking when ball hits paddle
  this.checkPaddle = function(){
    //takes location of center of ball
    var distY = abs(this.loc.y - 560)
    // checking if ball is hitting the bottom of paddle
    if((distY < 10) && (this.loc.x > mouseX - 125) && (this.loc.x < mouseX + 125) && (this.vel.y > 0)){
      this.sp = 1
    }
    if((distY < 10) && (this.loc.x > mouseX - 125 ) && (this.loc.x < mouseX + 125) && (this.vel.y < 0)){
      this.sp = 2
    }
  }
}
