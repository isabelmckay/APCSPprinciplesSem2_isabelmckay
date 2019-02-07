// Isabel McKay
// JSON Lab
// 18 January 2019

// global variables
var data = [];

// loading JSON file data
function preload(){
  data = loadJSON("data.json");
// console.log(data);
// ^^ potential usage?
}

//setup code
  function setup(){
  noCanvas();
  bubbleSort(data);
  console.log(data.crime)
}

// how do I make a bar graph??
function draw(){
  // bar graph function here
}

// bubble sort function
  function bubbleSort(data){
    var length = data.length
    for(var i = 0; i < length; i++){
      for(var j = 0; j < (length - i - 1); j++){
        var a = data[j].crimedata.state;
        var b = data[j+1].crimedata.state;
        if(data[j] > data[j+1]){
          // swapping numbers
          // temp variable
          var temp = data[j];
          data[j] = data[j+1];
          data[j+1] = temp;
        }
      }
    }
  }
  // end of sketch.js
