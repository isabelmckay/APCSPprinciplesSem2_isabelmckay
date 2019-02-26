// Isabel McKay
// JSON Lab
// 18 January 2019

// global variables
var data = [];
var bigTotal = 0;
// loading JSON file data
function preload(){
  data = loadJSON("data.json");
// console.log(data);
// ^^ potential usage?
}

//setup code
  function setup(){
  bubbleSort(data);
  console.log(data.crime)
}

// how do I make a bar graph??
function draw(){
  function visuals(){
  // bar graph function here
}

// bubble sort function
  function bubbleSort(data){
    var length = data.crime.length;
  ///  console.log("i got here, " + length)
    for(var i = 0; i < length; i++){
      for(var j = 0; j < (length - i - 1); j++){
        var a = data.crime[j].Murder;
        var b = data.crime[j+1].Murder;
        if(a > b){
          // swapping numbers
          // temp variable
          var temp = data.crime[j];
          data.crime[j] = data.crime[j+1];
          data.crime[j+1] = temp;
        }
      }
    }
  }

//visual representation function
  function visuals(){
      for(var i = 1; i < data.crime.length; i++){
        bigTotal = bigTotal + data.crime.length[i].total;
      }
      var lastAngle = 0;
        for(var i = 0; i < data.crime.length; i++){
          var angle = ((data.crime[i].total / bigTotal) * (2 * PI));
          fill(100, 25, 10*i);
          arc(300, 400, 500, 700, lastAngle, lastAngle + angle);
          lastAngle +- angle
        }
  }
  // end of sketch.js
