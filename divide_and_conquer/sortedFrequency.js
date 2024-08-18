function sortedFrequency(arr, num) {
	// a function for funding the first index of given num
	function findFirstIndex(arr, num) {
		let left = 0;
		let right = arr.length - 1;
		while (left <= right) {
			let mid = Math.floor((left + right) / 2);

			//check if the mid equals to num
			if (arr[mid] === num && (mid == 0 || arr[mid - 1] < num)) {
				return mid;
			}

			//if mid is less than numm check the right half
			else if (arr[mid] < num) {
				left = mid + 1;
			}

			//if mid is greater than num, check the left side
			else {
				right = mid - 1;
			}
		}
		// If no num is found, return -1
		return -1;
	}
	function findLastIndex(arr, num) {
		let left = 0;
		let right = arr.length - 1;
		while (left <= right) {
			let mid = Math.floor((left + right) / 2);

			//check if the mid equals to num
			if (arr[mid] === num && (mid == arr.length - 1 || arr[mid + 1] > num)) {
				return mid;
			}

			//if mid is less than numm check the right half
			else if (arr[mid] < num || (arr[mid] == num && arr[mid] == arr[mid+1] )) {
				left = mid + 1;
			}

			//if mid is greater than num, check the left side
			else {
				right = mid - 1;
			}
		}
		// If no num is found, return -1
		return -1;
	}

	const firstIndex = findFirstIndex(arr, num);
	const lastIndex = findLastIndex(arr, num);

	// console.log(firstIndex);
	// console.log(lastIndex);
        if(firstIndex == -1){
                return -1
        }
        if(firstIndex !== -1 && lastIndex !== -1) {
                return lastIndex - firstIndex + 1
        }
}
let res = sortedFrequency([1,1,2,2,2,2,3],3)

console.log(res)