var maxDepth = function (root) {
	if (root == null) return [];
	let counter = 0;
	const result = [];
	const queue = [root];
	while (queue.length) {
		let len = queue.length;
		result.push(queue.map((pointer) => pointer.val));
		counter++;
		while (len--) {
			let pointer = queue.shift();
			if (pointer.left !== null) queue.push(pointer.left);
			if (pointer.right !== null) queue.push(pointer.right);
		}
	}
	return counter;
};
