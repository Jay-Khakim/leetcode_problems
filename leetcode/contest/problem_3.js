// 100360. Maximum Number of Operations to Move Ones to the End

// You are given a 
// binary string
//  s.

// You can perform the following operation on the string any number of times:

// Choose any index i from the string where i + 1 < s.length such that s[i] == '1' and s[i + 1] == '0'.
// Move the character s[i] to the right until it reaches the end of the string or another '1'. For example, for s = "010010", if we choose i = 1, the resulting string will be s = "000110".
// Return the maximum number of operations that you can perform.


/**
 * @param {string} s
 * @return {number}
 */
var maxOperations = function(s) {
       
    let countZeros = 0;  // Count of zeros encountered
    let operations = 0;  // Total number of operations performed
    let arr = s.split("");  // Convert string to array for easier manipulation
    let i = 0;
    let hasMove = true;

    // Keep looping while valid moves are possible
    while (hasMove) {
        hasMove = false;  // Assume no valid move is found in this iteration

        // Traverse the string array
        for (i = 0; i < arr.length - 1; i++) {
            if (arr[i] === '1' && arr[i + 1] === '0') {
                hasMove = true;  // A valid move is found
                // Count zeros to the right of the current `1`
                countZeros = 0;
                for (let j = i + 1; j < arr.length && arr[j] === '0'; j++) {
                    countZeros++;
                }
                // Perform the move by updating the array
                
                arr[i] = "0";
                arr[i + countZeros] = '1';
                // Update the total operations
                console.log("Zero counts: "+ countZeros)
                operations += 1;

                console.log(arr)
                console.log("Operations: "+operations)
                // Break out of the for loop to recheck from the start
                break;
            }
        }
    }

    return operations;
    };

    // console.log(maxOperations("1001101")); // Output: 4
    console.log(maxOperations("1010101")); // Output: 
    console.log(maxOperations("00111"));