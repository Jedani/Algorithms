var searchMatrix = function (matrix, target) {
	let temp = [];
	const flat = matrix.flat();
	let found = flat.find((el) => el == target);
	if (found !== undefined) {
		temp.push(found);
	}
	if (temp[0] !== undefined) {
		return true;
	}
	return false;
};

console.log(
	searchMatrix(
		[
			[1, 3, 5, 7],
			[10, 11, 16, 20],
			[23, 30, 34, 60],
		],
		13,
	),
);
