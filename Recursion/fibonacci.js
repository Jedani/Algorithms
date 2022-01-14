const fib = (num, array = [0, 1]) => {
	if (num <= 2) {
		return array;
	}
	const [lastPrev, last] = array.slice(-2);
	return fib(num - 1, [...array, lastPrev + last]);
};

console.log(fib(3));

const fibPos = (pos) => {
	if (pos < 2) {
		return pos;
	}
	return fibPos(pos - 1) + fibPos(pos - 2);
};
console.log(fibPos(8));
