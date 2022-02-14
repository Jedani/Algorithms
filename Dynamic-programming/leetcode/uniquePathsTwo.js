var uniquePathsWithObstacles = function (obstacleGrid) {
	const findPathways = (row, col, grid) => {
		const targetRow = grid.length - 1;
		const targetCol = grid[0].length - 1;

		if (row > targetRow || col > targetCol || grid[row][col] === 1) return 0;
		if (row === targetRow && col === targetCol) return -1;

		if (grid[row][col] === 0) {
			const pathRight = findPathways(row, col + 1, grid);
			const pathDown = findPathways(row + 1, col, grid);

			grid[row][col] = pathRight + pathDown;
		}

		return grid[row][col];
	};
	return Math.abs(findPathways(0, 0, obstacleGrid));
};

var uniquePathsWithObstacles = function (obstacleGrid) {
	const m = obstacleGrid.length;
	const n = obstacleGrid[0].length;

	let prevRow = new Array(n + 1).fill(0);
	let curRow;

	for (let i = 1; i < m + 1; i++) {
		curRow = new Array(n + 1).fill(0);
		for (let j = 1; j < n + 1; j++) {
			if (i === 1 && j === 1) {
				curRow[j] = obstacleGrid[i - 1][j - 1] === 1 ? 0 : 1;
			} else {
				curRow[j] =
					obstacleGrid[i - 1][j - 1] === 1 ? 0 : prevRow[j] + curRow[j - 1];
			}
		}
		prevRow = curRow;
	}

	return curRow[n];
};

console.log(
	uniquePathsWithObstacles([
		[0, 0, 0],
		[0, 1, 0],
		[0, 0, 0],
	]),
);
