class Node {
	constructor(val) {
		this.val = val;
		this.left = null;
		this.right = null;
	}
}
const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");

a.left = b;
b.left = d;
b.right = e;
a.right = c;
c.right = f;

const root = a;

var preorderTraversal = function (root) {
	let stack = [root];
	let res = [];

	while (stack.length > 0) {
		const currElement = stack.pop();
		if (currElement.right) stack.push(currElement.right);
		if (currElement.left) stack.push(currElement.left);
		res.push(currElement.val);
	}
	return res;
};

console.log(preorderTraversal(root));
