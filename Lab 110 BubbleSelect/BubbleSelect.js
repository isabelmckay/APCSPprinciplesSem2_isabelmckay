/*
** Bar Constructor Function
** Isabel McKay
** Aug 21, 2018
*/

// adding variables for the colorbar
function colorbar(loc, w, h, clr, clrAvg){
  // Instance Variables
  this.loc = loc;
  this.w = w;
  this.h = h;
  this.clr = clr;
  this.clrAvg = clrAvg;

this.run = function(){
  this.render();
}

this.render = function(){
  fill(this.clr);
  rect(this.loc.x, this. loc.y, this.w, this.h);
}

}
