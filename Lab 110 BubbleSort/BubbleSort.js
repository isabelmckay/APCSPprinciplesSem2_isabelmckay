/*
** Bubble Sort
** Isabel McKay
** January 10, 2019
*/

//global variables
//measurements
var compares = 0;
var swaps = 0;
var millisecondEnd;
var milliseondStart;
var difference;
var data = [];
var dataNumbers = 20000

//setup function
function setup() {
  for(var i = 0; i < dataNumbers; i++){
    data.push(random(0, 2000));
  }
  bubbleSort(data);
}

//calling draw
function draw(){
}

//bubblesort function
function bubbleSort(data) {
  millisecondStart = millis();
  var length = data.length;
    for (var i = 0; i < length; i++) {
        for (var j = 0; j < (length - i - 1); j++) {
            var a = data[j];
            var b = data[j+1];
            compares++;
            if(a > b) {
                var temp = data[j];
                data[j] = data[j+1];
                data[j+1] = temp;
                swaps++;
            }
        }
    }
    millisecondEnd = millis();
    difference = millisecondEnd - millisecondStart;
    console.log(data);
    console.log(millisecondStart + " start");
    console.log(millisecondEnd + " end");
    console.log(difference + " difference");
    console.log(swaps + " swaps");
    console.log(compares + " compares");
}
