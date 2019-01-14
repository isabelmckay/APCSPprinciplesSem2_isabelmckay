/*
** Selection Sort
** Isabel McKay
** January 10, 2019
*/


// selection Sort
// variables
// arr = array
function SelectSort
for (var i = 0; i < arr.length - 1; i++)
      {
          var index = i;
          for (var j = i + 1; j < arr.length; j++)
  if (arr[j] < arr[index])
     index = j;
//swap!
          var smallerNumber = arr[index];
          arr[index] = arr[i];
          arr[i] = smallerNumber;
      }
