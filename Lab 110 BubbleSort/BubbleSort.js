/*
** Bubble Sort
** Isabel McKay
** Aug 21, 2018
*/

// bubblesort function
function bubbleSort(Bars){
  var length = Bars.length;
  for(var i = length-1; i > 0; i--){
    for(var j = 0; j < (length - i - 1); j++){
      var a = Bars[j].clrAvg;
      var b = Bars[j+1].clrAvg;
      if(a > b) {
        var temp = Bars[j];
        Bars[j] = Bars[j+1];
        Bars[j+1] = temp;
    }
  }
}
