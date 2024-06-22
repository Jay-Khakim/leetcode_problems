// capitalizeFirst
// Write a recursive function called capitalizeFirst. 
// Given an array of strings, capitalize the first letter of each string in the array.

function capitalizeFirst (arr) {
    // add whatever parameters you deem necessary - good luck!
    if(arr.length == 0){
        return []
    }
    
    let firstString = arr[0];
    let capitalizedFirstString = firstString.charAt(0).toUpperCase() + firstString.slice(1)
    
    return [capitalizedFirstString].concat(capitalizeFirst(arr.slice(1)))
   }
   
   // capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']
   