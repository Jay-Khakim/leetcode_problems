//ES2015

//Optimized with noSwaps
function buubleSort(arr) {
	let noSwaps;
	const swap = (arr, indx1, indx2) => {
		[arr[indx1], arr[indx2]] = [arr[indx2], arr[indx1]];
	};
	for (let i = arr.length; i > 0; i--) {
		noSwaps = true;
		for (let j = 0; j < i - 1; j++) {
			if (arr[j] > arr[j + 1]) {
				swap(arr, j, j + 1);
				noSwaps = false;
			}
		}
		if (noSwaps) break;
	}
}
