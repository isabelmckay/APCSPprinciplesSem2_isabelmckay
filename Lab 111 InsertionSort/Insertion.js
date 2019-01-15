/*
** Insertion Sort
** Isabel McKay
** January 11, 2019
*/

// Insertion sort function
//global variables
//measurements
var compares = 0
var swaps = 0;
var millisecondEnd = 0;
var milliseondStart = 0;
var data = [];
var dataNumbers = 20000;

//setup function
function setup(){
  for(var i = 0; i < dataNumbers; i++){
    data.push(random(0, 2000));
  }
  organize();
}

//calling draw
function draw(){
}

function organize(){
  var temp;
  millisecondStart = millis();
  for (var i = 1; i < data.length; i++){
    for(var j = i; j > 0; j--){
      //comparing
      compares++;
      if(data[j] < data[j-1]){
        temp = data[j];
        data[j] = data[j-1];
        data[j-1] = temp;
        //swapping data
        swaps++;
      }
    }
  }
  // finished array
  millisecondEnd = millis();
  //prints final sorted array
  console.log(data);
  console.log(millisecondStart + " start");
  console.log(millisecondEnd + " end");
  console.log(swaps + " swaps");
  console.log(compares + " compares");
}
