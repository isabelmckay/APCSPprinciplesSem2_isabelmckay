/*
** My Sort
** Isabel McKay
** Aug 21, 2018
*/

// variables
var num = [1,3,2];
var min // small value?
// MySort
function MySort (num) {
  for (var i = 1; i < num.length; i++){
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
