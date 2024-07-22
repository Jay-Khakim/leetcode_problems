// Given the roots of two binary trees p and q, write a function to check if they are the same or not.

// Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.

var isSameTree = function (p, q) {
	if (!p && !q) return true;
	if (!p || !q) return false;
	return (
		p.val === q.val &&
		isSameTree(p.left, q.left) &&
		isSameTree(p.right, q.right)
	);
};
