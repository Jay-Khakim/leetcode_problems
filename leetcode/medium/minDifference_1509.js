var minDifference = function(nums) {
    if(nums.length <= 4){
        return 0
    }
    nums = nums.sort((a, b)=> a-b).slice(0, -3);
    console.log(nums)
    return Math.max(...nums) - Math.min(...nums)

};

console.log(minDifference([6,6,0,1,1,4,6]))