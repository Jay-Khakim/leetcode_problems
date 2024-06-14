
console.time("Time complexity");
function maxSubarraySum(arr, num){

    
    if(num > arr.kength){
        return null;
    }

    var max = -Infinity;

    for (let i=0; i<arr.length-num+1; i++){
        temp = 0;


        for(let j=0; j<num; j++){
            temp += arr[i+j]
        }

        if (temp > max){
            max = temp
        }
    }

    return max;

    
}


console.log(maxSubarraySum([1,2,3,4,5,5,6], 4))
console.timeEnd("Time complexity");

// Time Complexity O(N^2)