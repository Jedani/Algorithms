function minimumTotal(triangle, DP = triangle.shift()) {
	if (!triangle.length) return Math.min(...DP);

	DP = triangle
		.shift()
		.map((num, x) => num + Math.min(DP[x - 1] ?? Infinity, DP[x] ?? Infinity));

	return minimumTotal(triangle, DP);
}

console.log(minimumTotal([[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]]));
