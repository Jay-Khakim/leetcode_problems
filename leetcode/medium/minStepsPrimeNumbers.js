/**
 * @param {number} n
 * @return {number}
 */
var minSteps = function(n) {
        let sum = 0;
        
        // Divide out the factor of 2 first
        while (n % 2 === 0) {
            sum += 2;
            n = n / 2;
        }
        
        // Check for odd factors starting from 3
        let divisor = 3;
        while (n !== 1 && divisor <= Math.sqrt(n)) {
            while (n % divisor === 0) {
                sum += divisor;
                n = n / divisor;
            }
            divisor += 2;
        }
        
        // If n is still greater than 2, then it is a prime nber
        if (n > 2) {
            sum += n;
        }
        
        return sum;
    };