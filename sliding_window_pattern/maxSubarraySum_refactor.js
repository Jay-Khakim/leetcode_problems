
console.time("Time complexity");
function maxSubarraySum(arr, num){
    let maxSum = 0; 
    let tempSum = 0;
    if (arr.length < num) return null

    for(let i = 0; i<num; i++){
        maxSum += arr[i]
    }

    tempSum = maxSum;
    for (let i = num; i<arr.length; i++){
        tempSum = tempSum - arr[i-num] + arr[i];
        maxSum = Math.max(maxSum, tempSum);
    }

    return maxSum
}


console.log(maxSubarraySum([1,2,3,4,5,5,6], 4))
console.timeEnd("Time complexity");

// Time Complexity O(N)