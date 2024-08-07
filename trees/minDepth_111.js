// Minimum Depth of Binary Tree
class Node {
	constructor(val, left, right) {
		this.val = val === undefined ? 0 : val;
		this.left = left === undefined ? null : left;
		this.right = right === undefined ? null : right;
	}
}

class BinaryTree{
        constructor(){
                this.root = null;
        }

        insert(value) {
		let newNode = new Node(value);
		if (this.root === null) {
			this.root = newNode;
			return this;
		}
		let current = this.root;
		while (true) {
			if (value === current.value) return undefined;
			if (value < current.value) {
				if (current.left === null) {
					current.left = newNode;
					return this;
				}
				current = current.left;
			} else {
				if (current.right === null) {
					current.right = newNode;
					return this;
				}
				current = current.right;
			}
		}
	}
}

// @param {TreeNode} root
// @return {number}

var minDepth = function (root) {
	if (root === null) {
		return 0;
	} else {
		const leftDepth = minDepth(root.left);
		const rightDepth = minDepth(root.right);
		return Math.min(leftDepth, rightDepth) + 1;
	}
};

let bts = new BinaryTree();
bts.insert(3)
bts.insert(9)
bts.insert(20)

bts.insert(15)
bts.insert(7)

console.log(minDepth(bts.root));
