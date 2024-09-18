var findMinDifference = function (timePoints) {
	let minutes = [];
	for (let time of timePoints) {
		let h = parseInt(time.slice(0, 2));
		let m = parseInt(time.slice(3, 5));
		minutes.push(h * 60 + m);
	}
	minutes.sort((a, b) => a - b);
	let ans = Infinity;
	for (let i = 0; i < minutes.length - 1; i++) {
		ans = Math.min(ans, minutes[i + 1] - minutes[i]);
	}
	ans = Math.min(ans, 24 * 60 - minutes[minutes.length - 1] + minutes[0]);
	return ans;
};

// console.log(findMinDifference(["23:59", "00:00"]));
console.log(findMinDifference(["00:00", "23:59", "00:00"]));
