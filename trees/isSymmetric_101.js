var isSymmetric = function (root) {
	if (!root) return true;
	return isSame(root.left, root.right);
};

let isSame = function (leftOfRoot, rightOfRoot) {
	if (
		(!leftOfRoot && rightOfRoot) ||
		(leftOfRoot && !rightOfRoot) ||
		(leftOfRoot && rightOfRoot && leftOfRoot.val !== rightOfRoot.val)
	)
		return false;

	if (leftOfRoot && rightOfRoot)
		return (
			isSame(leftOfRoot.left, rightOfRoot.right) &&
			isSame(leftOfRoot.right, rightOfRoot.left)
		);
	return true;
};
