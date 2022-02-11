var nthUglyNumber = function (n) {
	let store = new Array(n);
	let i2 = 0;
	let i3 = 0;
	let i5 = 0;

	let nextMult2 = 2;
	let nextMult3 = 3;
	let nextMult5 = 5;
	store[0] = 1;

	let nextUgly = 1;
	for (i = 1; i < n; i++) {
		nextUgly = Math.min(nextMult2, nextMult3, nextMult5);

		store[i] = nextUgly;
		if (nextUgly == nextMult2) {
			i2 = i2 + 1;
			nextMult2 = store[i2] * 2;
		}
		if (nextUgly == nextMult3) {
			i3 = i3 + 1;
			nextMult3 = store[i3] * 3;
		}
		if (nextUgly == nextMult5) {
			i5 = i5 + 1;
			nextMult5 = store[i5] * 5;
		}
	}
	return nextUgly;
};

console.log(nthUglyNumber(10));
