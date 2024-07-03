function selectionSort(arr) {
	const swap = (arr, indx1, indx2) => {
		[arr[indx1], arr[indx2]] = [arr[indx2], arr[indx1]];
	};
	for (let i = 0; i < arr.length; i++) {
		var lowest = i;
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[j] < arr[lowest]) {
				lowest = j;
			}
		}
		swap(arr, i, lowest);
	}
	return arr;
}

console.log(selectionSort([1, 5, 3, 10, 56, 33]));
