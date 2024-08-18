function fib(n, memo = []) {
	if (memo[n] !== undefined) return memo[n];
	if (n == 0) return 0;
	if (n <= 2) return 1;
	let res = fib(n - 1, memo) + fib(n - 2, memo);
	memo[n] = res;
        // console.log(memo)
	return res;
}

console.log(fib(40));


// function fib(n, memo = [undefined, 1, 1]) {
// 	if (memo[n] !== undefined) return memo[n];
// 	if (n == 0) return 0;
// 	let res = fib(n - 1, memo) + fib(n - 2, memo);
// 	memo[n] = res;
//         console.log(memo)
// 	return res;
// }
// console.log(fib(0));
