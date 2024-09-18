var largestNumber = function (nums) {
	//Converting nums to strings and storing them in array
	let numsString = nums.map(num => num.toString());

	//Creating custom sorting function
	numsString.sort((a, b) => {
		let ab = a + b; //Concatenating a and b as a string
		let ba = b + a; //Concatenating b and a as a string

		//Comparing ab and ba
		if (ab > ba) {
			return -1; // If ab is larger, a comes before b
		} else if (ab < ba) {
			return 1; // If ab is smaller, b comes before a
		} else {
			return 0; // They are equal in terms of concatenation
		}
	});

	//Chechking for "0"
	if (numsString[0] == "0") {
		return "0";
	}

	//Returning the joined string forming the largest number possible
	return numsString.join("");
};

console.log(largestNumber([999999, 999999998, 999999997]));
