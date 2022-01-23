function fibonnaci(n, memo = {}) {
	if (n in memo) {
		return memo[n];
	}
	if (n == 0 || n == 1) {
		return n;
	}
	memo[n] = fibonnaci(n - 1, memo) + fibonnaci(n - 2, memo);
	return memo[n];
}

console.log(fibonnaci(70));
