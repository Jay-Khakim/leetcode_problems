// You are given a string s that consists of lower case English letters and brackets.

// Reverse the strings in each pair of matching parentheses, starting from the innermost one.

// Your result should not contain any brackets.


var reverseParentheses = function (s) {
	let indStack = [];
	let res = [];

	for (let char_s of s) {
		if (char_s === "(") {
			indStack.push(res.length);
		} else if (char_s === ")") {
			let startInd = indStack.pop();
			let subArr = res.slice(startInd).reverse();
			res.splice(startInd, subArr.length, ...subArr);
		} else {
			res.push(char_s);
		}
	}

	return res.join("");
};
