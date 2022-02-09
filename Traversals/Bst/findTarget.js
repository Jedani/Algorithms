var findTarget = function (r, k) {
	if (!r) return false;
	let q = [r];
	const s = new Set();
	while (q.length) {
		let c = q.shift();
		if (c.left) {
			q.push(c.left);
		}
		if (c.right) {
			q.push(c.right);
		}
		const d = k - c.val;
		if (s.has(c.val)) {
			return true;
		}
		s.add(d);
	}

	return false;
};
