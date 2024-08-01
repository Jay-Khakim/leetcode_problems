// 2678. Number of Senior Citizens





var countSeniors = function (details) {
	let count = 0;
	// for (element of details) {
	// 	let chars = element.split("");
	// 	if (Number(chars[11]) == 6 ){
	//                 if(Number(chars[12]) > 0){
	//                         count++;
	//                 }
	//         }
	//         if(Number(chars[11]) > 6) count++

	// }

	details.map(item => {
		const age = parseInt(item.slice(11, 13));
		if (age > 60) count++;
	});
	return count;
};
details = [
	"5612624052M0130",
	"5378802576M6424",
	"5447619845F0171",
	"2941701174O9078",
];
console.log(countSeniors(details));
