const matrixReshape = (mat, r, c) => {
	const flat = mat.flat();
	if (flat.length !== r * c) return mat;
	return [...Array(r)].map(() => flat.splice(0, c));
};

console.log(
	matrixReshape(
		[
			[2, 3],
			[3, 4],
		],
		1,
		4,
	),
);
