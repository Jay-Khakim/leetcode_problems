// Binary Search Exercise
// Write a function called binarySearch which accepts a sorted array and a value and returns the index at which the value exists.
// Otherwise, return -1.

function binarySearch(arr, val){
    let left  = 0
     let right = arr.length -1 
     
 
     while(left <= right){
         let middle = Math.floor((left + right)/2)
 
         if(val === arr[middle]){
             return middle
         } else if( val < arr[middle]){
             right = middle - 1
         }else {
             left = middle + 1
         }
     }
 
     return -1 
 }