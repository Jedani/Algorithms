var searchMatrix = function (matrix, target) {
	let i = 0;
	let j = matrix[0].length - 1;

	while (i < matrix.length && j >= 0) {
		if (matrix[i][j] === target) {
			return true;
		} else {
			if (matrix[i][j] > target) {
				j--;
			} else {
				i++;
			}
		}
	}
	return false;
};

// console.log(
// 	searchMatrix(
// 		[
// 			[1, 4, 7, 11, 15],
// 			[2, 5, 8, 12, 19],
// 			[3, 6, 9, 16, 22],
// 			[10, 13, 14, 17, 24],
// 			[18, 21, 23, 26, 30],
// 		],
// 		18,
// 	),
// );

console.log(searchMatrix([[1, 1]], 2));
