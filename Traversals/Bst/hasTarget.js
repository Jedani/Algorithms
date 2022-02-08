class Node {
	constructor(val) {
		this.val = val;
		this.left = null;
		this.right = null;
	}
}
const a = new Node(4);
const b = new Node(2);
const c = new Node(7);
const d = new Node(1);
const f = new Node(3);

a.left = b;
a.right = c;
b.right = f;
// b.left = d;

var searchBST = function (root, val) {
	let stack = [root];
	let res = [];

	while (stack.length) {
		let pointer = stack.shift();
		if (pointer.val == val) {
			res.push(pointer.val);
			// add some if statements
		}
		if (pointer.left !== null) stack.push(pointer.left);
		if (pointer.right !== null) stack.push(pointer.right);
	}
	return res;
};
console.log(searchBST(a, 2));
