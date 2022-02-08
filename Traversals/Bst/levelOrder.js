class Node {
	constructor(val) {
		this.val = val;
		this.left = null;
		this.right = null;
	}
}
const a = new Node(3);
const b = new Node(9);
const c = new Node(20);
const d = new Node(15);
const f = new Node(7);

a.left = b;
a.right = c;
c.right = f;
c.left = d;

const levelOrder = function (root) {
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

console.log(levelOrder(a));
