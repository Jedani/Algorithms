var lowestCommonAncestor = function (root, p, q) {
	let saveRoot = root;
	let way = new Set([root]);

	while (root !== p) {
		root = p.val < root.val ? root.left : root.right;
		way.add(root);
	}

	root = saveRoot;
	let LCA = root;

	while (root !== q) {
		root = q.val < root.val ? root.left : root.right;
		if (way.has(root)) LCA = root;
	}

	return LCA;
};
