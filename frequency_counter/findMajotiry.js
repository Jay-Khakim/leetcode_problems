// 169. Majority Element

// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times.
//  You may assume that the majority element always exists in the array.

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
        let frequency = {}
        for(let val of nums){
            frequency[val] = (frequency[val] || 0) + 1
        }
        // console.log(frequency)
    
        for(let key in frequency){
            if(frequency[key] > nums.length/2) return key
        }
    };