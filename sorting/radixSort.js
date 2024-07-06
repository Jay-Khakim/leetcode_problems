//helper method

function getDigit(num, i) {
	return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}
// console.log(getDigit(1234234, 4));

function digitCount(num) {
	if (num === 0) return 1;

	return Math.floor(Math.log10(Math.abs(num))) + 1;
}
// console.log(digitCount(51234))

function mostDigits(nums){
        let maxDigits = 0;
        for(let i = 0; i < nums.length; i++){
                maxDigits = Math.max(maxDigits, digitCount(nums[i]));
        }
        return maxDigits
}

//actual Radix sort algorithm
function radixSort(nums){
        let maxDigitCount = mostDigits(nums);
        for(let k=0; k<maxDigitCount; k++){
                let digitBuckets = Array.from({length:10}, ()=> [])
                for(let i=0; i<nums.length; i++){
                        digitBuckets[getDigit(nums[i], k)].push(nums[i]);
                }
                console.log(digitBuckets)
                nums = [].concat(...digitBuckets);
                console.log(nums)
                console.log("--------------------------------")
        }
        return nums
}

console.log(radixSort([1234,54524,123,434,55,3,123555]))