var numTrees = function (n) {
	let mem = Array(n);
	(mem[0] = 1), (mem[1] = 2);
	function f(n) {
		if (n <= 1) return 1;
		if (n == 2) return 2;
		if (mem[n]) return mem[n];
		let ans = 0;
		for (let i = 0; i < n; i++) {
			ans = ans + f(i) * f(n - 1 - i);
		}
		mem[n] = ans;
		return ans;
	}
	return f(n);
};

console.log(numTrees(3));
//
