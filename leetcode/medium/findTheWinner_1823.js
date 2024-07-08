var findTheWinner = function(n, k) {
        let friends = Array.from({ length: n }, (_, i) => i + 1);
        let index = 0
        while(friends.length > 1){
            index = (index + k-1)%friends.length;
            friends.splice(index, 1);
        }
        return friends[0]
};


console.log(findTheWinner(5, 2))