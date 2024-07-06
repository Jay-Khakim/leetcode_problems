var passThePillow = function (n, time) {
        // let direction = 1
            // let j = 1;
            // for (let i = 1; i <= time; i++) {
        //             j+=direction 
            // 	if (j == n || j==1) {
            // 		direction *= -1;	
            // 	}
        //             console.log(j + " " + i);
            // }
            // return j;
    
        let direction = 1
        let j = 0
    
        while( time>0){
            j+=direction
            if(j=== n-1 || j === 0){
                direction *= -1
            }
            time--
        }
    
        return j+1
    };

console.log(passThePillow(4, 5))
