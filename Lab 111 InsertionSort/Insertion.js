/*
** Insertion Sort
** Isabel McKay
** January 11, 2019
*/

// Insertion sort function
//variables
var temp;
      for (var  i = 1; i < arr.length; i++)
{
            for(var  j = i ; j > 0 ; j--)
            {
//  Swap!
               if(arr[j] < arr[j-1]){
                  temp = arr[j];
                  arr[j] = arr[j-1];
                  arr[j-1] = temp;
                }
            }
       }
