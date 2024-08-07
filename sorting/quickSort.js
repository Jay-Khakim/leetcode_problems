//Pivot
function pivot(arr, start = 0, end = arr.length - 1) {
	const swap = (arr, index1, index2) => {
		[arr[index1], arr[index2]] = [arr[index2], arr[index1]];
	};

	let pivot = arr[start];

	let swapIdx = start;

	for (let i = start + 1; i < arr.length; i++) {
		if (pivot > arr[i]) {
			swapIdx++;
			swap(arr, swapIdx, i);
		}
	}

	swap(arr, start, swapIdx);
	// console.log(arr);

	return swapIdx;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
	if (left < right) {
		let pivotIndex = pivot(arr, left, right);
		//left
		quickSort(arr, left, pivotIndex - 1);

		//right
		quickSort(arr, pivotIndex + 1, right);
	}

	return arr;
}

console.log(quickSort([-1, 11, 4, 1, 2, 5, 6, 3, 8, 7, 9]));
