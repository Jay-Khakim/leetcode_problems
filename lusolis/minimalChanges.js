function minimalOperations(words) {
	let result = [];
	for (let word of words) {
		let count = 0;
		let chars = word.split("");
		for (let i = 0; i < chars.length - 1; i++) {
			if (chars[i] == chars[i + 1]) {
				count++;
				i += 1;
			}
		}
		result.push(count);
	}
	return result;
}

console.log(minimalOperations(['zqzcdhefjzuqfkigwydqalimitpkwduxsauxslqanstag','lasoembsbtjgwacvuvygavlwfuedjwwhyhyjwxkfbtofjogogkjojyxncfmekmowcjmk', 'rdfrxmmwwgyfwrboqfnwpngroegtkfoyypektjj']))
