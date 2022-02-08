var isSymmetric = function (root) {
	if (root == null || check(root.left, root.right)) return true;

	function check(leftSub, rightSub) {
		if (leftSub == null && rightSub == null) return true;

		if (leftSub !== null && rightSub !== null) {
			return (
				leftSub.val == rightSub.val &&
				check(leftSub.left, rightSub.right) &&
				check(leftSub.right, rightSub.left)
			);
		}
	}
	return false;
};

console.log(isSymmetric([1, 2, 2, 3, 4, 4, 3]));
