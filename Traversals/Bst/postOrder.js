var postorderTraversal = function (node) {
	let output = [];
	let stack = [];
	let lastNodeVisited = null;
	while (stack.length || node !== null) {
		if (node !== null) {
			stack.push(node);
			node = node.left;
		} else {
			let peekNode = stack[stack.length - 1];
			if (peekNode.right !== null && peekNode.right !== lastNodeVisited) {
				node = peekNode.right;
			} else {
				output.push(peekNode.val);
				lastNodeVisited = stack.pop();
			}
		}
	}
	return output;
};
