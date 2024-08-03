var maxDepth = function(root) {

        if(root === null){
            return 0
        }else{
            const leftDepth = maxDepth(root.left);
            const rightDepth = maxDepth(root.right);
            return Math.max(leftDepth, rightDepth) + 1;
    
        }
};

//Find the maxsimum depth of Binary tree