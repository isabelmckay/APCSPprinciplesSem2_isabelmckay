/*
** Bubble Sort and Selection Sort
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

// selection Sort
// variables
var num = [1,3,2];
var min
// MySort
function SelectSort (num) {
  for (var i = 0; i < num.length; i++){
    var min = i
    for (var j = 1; j < num.length; j++){
      if (num[j] < num[min]){
        min = j;
      }
    }
    if (min != i){
      var temp = num[min];
      num[min] = num[i];
      num[i] = temp;
    }
  }
}
