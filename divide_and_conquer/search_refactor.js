//binary search

function search(arr, val){
    arr.sort((a, b) => a-b)
    let min = 0;
    let max = arr.length-1;
    console.log(arr)

    while (min <= max){
        let middle = Math.floor((min+max)/2)
        let currentElement = arr[middle]

        if(arr[middle] < val){
            min = middle+1
        }else if(arr[middle] > val){
            max = middle -1
        }else{
            return middle
        }
    }
    return -1
}

console.log(search([1,2,3,3,4,54,5,5,3,3,2,434,3,1,23,4,], 54))

//time complexity O Log(N)