/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */

// 100372. Number of Bit Changes to Make Two Integers Equal
// Solved
// Easy
// You are given two positive integers n and k.

// You can choose any bit in the binary representation of n that is equal to 1 and change it to 0.

// Return the number of changes needed to make n equal to k. If it is impossible, return -1.
var minChanges = function(n, k) {
        if ((n & k) !== k) {
            return -1;
        }
    
        let changes = 0;
        let x = n & ~k;
        while (x) {
            changes += x & 1;
            x >>= 1;
        }
    
        return changes;
    };