var inorderTraversal = function (node) {
	let stack = [];
	let output = [];
	while (stack.length || node !== null) {
		if (node !== null) {
			stack.push(node);
			node = node.left;
		} else {
			node = stack.pop();
			output.push(node.val);
			node = node.right;
		}
	}
	return output;
};
