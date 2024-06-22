// capitalizeWords
// Write a recursive function called capitalizeWords. 
// Given an array of words, return a new array containing each word capitalized.

function capitalizeWords (arr) {
    if(arr.length == 0){
        return []
    }
    
    let capitalizedWords = arr[0].toUpperCase()
    
    return [capitalizedWords].concat(capitalizeWords(arr.slice(1)))
  }
  
  // let words = ['i', 'am', 'learning', 'recursion'];
  // capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']