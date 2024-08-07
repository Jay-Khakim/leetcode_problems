// var countNodes = function (root) {
// 	//counting all nodes
// 	return !root ? 0 : 1 + countNodes(root.left) + countNodes(root.right);
// };

var missingNumber = function (nums) {
	let array = Array.from({ length: nums.length + 1 }, (_, i) => i);
        nums.sort((a, b) => a - b)
	for (let i= 0; i<array.length; i++ ) {
                if(array[i] !== nums[i]){
                        return array[i]
                }
	}
};
nums = [3, 0, 1];
console.log(missingNumber(nums));
