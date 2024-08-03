var sortPeople = function (names, heights) {
	// let noSwaps;
	// const swap = (arr, i, j) => {
	//         [arr[i], arr[j]] = [arr[j], arr[i]];
	//     };
	// for (let i = heights.length; i > 0; i--) {
	// 	noSwaps = true;
	// 	for (let j = 0; j < i - 1; j++) {
	// 		if (heights[j] < heights[j + 1]) {
	// 			swap(heights, j, j + 1);
	//                         swap(names, j, j + 1);
	// 			noSwaps = false;
	// 		}
	// 	}
	// 	if (noSwaps) break;
	// }
	// return names;

	// let array = [];
	// let returne = [];
	// for (let i = 0; i < names.length; i++) {
	// 	array.push([names[i], heights[i]]);
	// }
	// array.sort((a, b) => b[1] - a[1]);
	// for (const arr of array) {
	// 	returne.push(arr[0]);
	// }
	// return returne;

	let array = [];
	let result = [];
	for (let i = 0; i < names.length; i++) {
		array.push([names[i], heights[i]]);
	}
	array.sort((a, b) => b[1] - a[1]);
	for (const arr of array) {
		result.push(arr[0]);
	}
	return result;
};

console.log(sortPeople(["Mary", "John", "Emma"], [180, 165, 170]));
