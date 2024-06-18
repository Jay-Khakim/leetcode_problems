// Sliding Window - findLongestSubstring
// Write a function called findLongestSubstring, which accepts a string and returns the length of the longest substring with all distinct characters.

// findLongestSubstring('') // 0
// findLongestSubstring('rithmschool') // 7
// findLongestSubstring('thisisawesome') // 6
// findLongestSubstring('thecatinthehat') // 7
// findLongestSubstring('bbbbbb') // 1
// findLongestSubstring('longestsubstring') // 8
// findLongestSubstring('thisishowwedoit') // 6
// Time Complexity - O(n)


function findLongestSubstring(str) {
    let start = 0;
    let maxLen = 0;
    let seen = new Set();
    
    for (let end = 0; end < str.length; end++) {
        while (seen.has(str[end])) {
            seen.delete(str[start]);
            start++;
        }
        seen.add(str[end]);
        maxLen = Math.max(maxLen, end - start + 1);
    }
    
    return maxLen;
}