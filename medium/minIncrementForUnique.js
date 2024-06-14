// You are given an integer array nums. In one move, you can pick an index i where 0 <= i < nums.length and increment nums[i] by 1.

// Return the minimum number of moves to make every value in nums unique.

// The test cases are generated so that the answer fits in a 32-bit integer.

var minIncrementForUnique = function(nums) {
    nums.sort((a, b) => a-b)

   let numTracker = 0;   // Tracks the next unique number that should be set.
    let minIncrement = 0; // Counts the total increments required.

    for (let num of nums) {
        numTracker = Math.max(numTracker, num);
        minIncrement += numTracker - num;
        numTracker++; // Increment the tracker for the next number.
    }
    return minIncrement
};