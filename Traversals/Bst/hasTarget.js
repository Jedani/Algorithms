var searchBST = function (root, val) {
	if (root == null) return [];
	const result = [];
	const queue = [root];
	while (queue.length) {
		let len = queue.length;
		result.push(queue.map((pointer) => pointer.val));
		while (len--) {
			let pointer = queue.shift();
			if (pointer.left !== null) queue.push(pointer.left);
			if (pointer.right !== null) queue.push(pointer.right);
		}
	}
	return result;
};

console.log(searchBST([4, 2, 7, 1, 3], 2));
