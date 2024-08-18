function fib(n){
        if(n == 0) return 0;
        if(n <= 2) return 1;
        let fibNums = [0, 1, 1];
        for(let i = 3; i <= n; i++){
                fibNums[i] = fibNums[i-1] + fibNums[i-2]
                console.log(fibNums[i]);
        }
        return fibNums[n];
}

console.log(fib(40))