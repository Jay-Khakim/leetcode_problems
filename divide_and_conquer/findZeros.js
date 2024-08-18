// Divide and Conquer - countZeroes
// Given an array of 1s and 0s which has all 1s first followed by all 0s, write a function called countZeroes, which returns the number of zeroes in the array.

// countZeroes([1,1,1,1,0,0]) // 2
// countZeroes([1,0,0,0,0]) // 4
// countZeroes([0,0,0]) // 3
// countZeroes([1,1,1,1]) // 0
// Time Complexity - O(log n)

function countZeroes(arr) {
	function findFirstZeroIndex(arr) {
		let left = 0;
		let right = arr.length - 1;

		while (left <= right) {
			let mid = Math.floor((left + right) / 2);

			// Check if mid is the first zero
			if (arr[mid] === 0 && (mid === 0 || arr[mid - 1] === 1)) {
				return mid;
			}

			// If mid is 1, search the right half
			else if (arr[mid] == 1) {
				left = mid + 1;
			}

			//if mid is 0 but not the first one search the left
			else {
				right = mid - 1;
			}
		}
		// If no zeroes are found, return -1
		return -1;
	}

	const firstZeroIndex = findFirstZeroIndex(arr);
	if (firstZeroIndex === -1) return 0;

	return arr.length - firstZeroIndex;
}
