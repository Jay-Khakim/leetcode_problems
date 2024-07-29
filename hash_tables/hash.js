// - Only hashes strings
// - Not constant time
// - Could be little more a random

// function hash(key, arrayLen){
//         let total = 0;
//         for(let char of key){
//                 let value = char.charCodeAt(0)-96
//                 total = (total + value) % arrayLen;
//         }
//         return total;
// }



//Hash function updated
function hash(key, arrayLen) {
	let total = 0;
	let WEIRED_PRIME = 31;
	for (let i = 0; i < Math.min(key.length, 100); i++) {
		let char = key[i];
		let value = char.charCodeAt(0) - 96;
		total = (total * WEIRED_PRIME + value) % arrayLen;
	}
	return total;
}
