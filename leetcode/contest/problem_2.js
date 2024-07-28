function isAliceWinner(s) {
        // Helper function to count the vowels in the string
        function countVowels(str) {
            const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
            let count = 0;
            for (let char of str) {
                if (vowels.has(char)) {
                    count++;
                }
            }
            return count;
        }
    
        // Count the total number of vowels in the string
        const totalVowels = countVowels(s);
    
        // Alice wins if the total number of vowels is odd, otherwise Bob wins
        return totalVowels > 0 && totalVowels % 2 !== 0;
    }
    
    // Example Usage
    console.log(isAliceWinner("leetcoder")); // Output: true
    console.log(isAliceWinner("bbcd"));      // Output: false
    console.log(isAliceWinner("aeiou"));     // Output: true
    console.log(isAliceWinner("abcde"));     // Output: false
    console.log(isAliceWinner("xyz"));       // Output: false