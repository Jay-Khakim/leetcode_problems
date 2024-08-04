// var rangeSum = function (nums, n, left, right) {
// 	const MOD = 10 ** 9 + 7;
// 	let subSums = [];
// 	for (let i = 0; i < nums.length; i++) {
// 		let sum = 0;
// 		for (let j = i; j < nums.length; j++) {
// 			sum = (sum + nums[j]) % MOD;
// 			subSums.push(sum);
// 		}
// 	}
// 	subSums.sort((a, b) => a - b);

// 	let result = 0;
//         for (let k = left - 1; k < right; k++) {
//                 result = (result + subSums[k]) % MOD;
//         }

//         return result;
// 	// return subSums;
// };
// nums = [1, 2, 3, 4];
// console.log(rangeSum(nums, 4, 1, 5));

var rangeSum = function (nums, n, left, right) {
	const MOD = 10 ** 9 + 7;
	let subSums = [];

	// Calculate all subarray sums
	for (let i = 0; i < nums.length; i++) {
		let sum = 0;
		for (let j = i; j < nums.length; j++) {
			sum = (sum + nums[j]) % MOD;
			subSums.push(sum);
		}
	}

	// Sort the subarray sums
	subSums.sort((a, b) => a - b);

	// Calculate the sum of the specified range
	let result = 0;
	for (let k = left - 1; k < right; k++) {
		result = (result + subSums[k]) % MOD;
	}

	return result;
};

// Example usage
const nums = Array(1000).fill(100);
const n = 1000;
const left = 1;
const right = 500500;
console.log(rangeSum(nums, n, left, right));
