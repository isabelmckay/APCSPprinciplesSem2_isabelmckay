/*
** Selection Sort
** Isabel McKay
** January 10, 2019
*/


// selection Sort
      //global variables
      //measurements
      var compares = 0
      var swaps = 0;
      var millisecondEnd = 0;
      var milliseondStart = 0;
      //data set
      var data = [];
      var dataNumbers = 20000
      var sorted = [];
      var unsorted = [];

      function setup() {
        for(var i = 0; i < dataNumbers; i++){
          data.push(random(0, 2000));
        }
        //organizing and copying data
        arrayCopy(data, unsorted, data.length);
        organize()
      }
// calling draw
      function draw() {
      }

      function organize(){
        millisecondStart = millis();
        for(var j = 0; j < data.length; j++){
          var min = unsorted[0]
          var minIndex = 0
          for (var i = 1; i < unsorted.length; i++){
            compares++;
            if(unsorted[i] < min){
              minIndex = i;
              min = unsorted[i];
              swaps++;
            }
          }
          sorted.push(min);
          unsorted.splice(minIndex, 1);
        }
        millisecondEnd = millis();
        //console
        console.log(sorted);
        console.log(millisecondStart + " start");
        console.log(millisecondEnd + " end");
        console.log(swaps + " swaps");
        console.log(compares + " compares");
      }
