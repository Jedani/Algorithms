var isValidBST = function (root) {
	if (root === null) return true;

	//root, low, high pointer
	let stack = [[root, null, null]];
	while (stack.length) {
		let currNode = stack.pop();
		let val = currNode[0].val;

		if (
			(currNode[1] !== null && val <= currNode[1]) ||
			(currNode[2] !== null && val >= currNode[2])
		)
			return false;

		if (currNode[0].left) stack.push([currNode[0].left, currNode[1], val]);
		if (currNode[0].right) stack.push([currNode[0].right, val, currNode[2]]);
	}
	return true;
};
