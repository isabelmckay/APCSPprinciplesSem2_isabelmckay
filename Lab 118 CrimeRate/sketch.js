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
  // end of sketch.js
