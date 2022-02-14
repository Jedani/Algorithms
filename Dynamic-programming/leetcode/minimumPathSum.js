var minPathSum = function (grid) {
	let m = grid.length;
	let n = grid[0].length;
	for (let r = 0; r < m; r++) {
		for (let c = 0; c < n; c++) {
			// Skip top left cell
			if (r === 0 && c === 0) {
				continue;
			}
			if (r === 0) {
				grid[r][c] += grid[r][c - 1];
				continue;
			}
			if (c === 0) {
				grid[r][c] += grid[r - 1][c];
				continue;
			}
			grid[r][c] = grid[r][c] + Math.min(grid[r][c - 1], grid[r - 1][c]);
		}
	}
	return grid[grid.length - 1][grid[0].length - 1];
};

console.log(
	minPathSum([
		[1, 3, 1],
		[1, 5, 1],
		[4, 2, 1],
	]),
);
