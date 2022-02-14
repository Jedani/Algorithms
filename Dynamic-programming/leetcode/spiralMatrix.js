var generateMatrix = function (n) {
	let res = [...Array(n)].map((x) => Array(n).fill(0));
	let power = Math.pow(n, 2);
	let top = 0,
		bottom = n - 1,
		right = n - 1,
		left = 0;
	let values = 1;
	while (values <= power) {
		for (let i = left; i <= right; i++) {
			res[top][i] = values++;
		}
		top++;
		for (let i = top; i <= bottom; i++) {
			res[i][right] = values++;
		}
		right--;
		for (let i = right; i >= left; i--) {
			res[bottom][i] = values++;
		}
		bottom--;
		for (let i = bottom; i >= top; i--) {
			res[i][left] = values++;
		}
		left++;
	}
	return res;
};

console.log(generateMatrix(3));
