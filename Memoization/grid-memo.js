const gridTraveller = (m, n, memo = {}) => {
	const key = m + "," + n;

	if (key in memo) {
		return memo[key];
	}

	if (m == 1 && n == 1) {
		return 1;
	}
	if (m == 0 || n == 0) {
		return 0;
	}

	memo[key] = gridTraveller(m - 1, n, memo) + gridTraveller(m, n - 1, memo);
	return memo[key];
};

console.log(gridTraveller(20, 30));

// OR

// not memoized

// const gridTraveller = (m, n) => {
// 	if (m == 1 && n == 1) {
// 		return 1;
// 	}
// 	if (m == 0 || n == 0) {
// 		return 0;
// 	}

// 	return gridTraveller(m - 1, n) + gridTraveller(m, n - 1);
// };

// // console.log(gridTraveller(2, 3));
