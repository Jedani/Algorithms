// create a recursive function that counts to ten

function countToTen(num, counts) {
	if (num === 1) {
		return counts;
	}
	let a = counts++;
	console.log(a);
	return countToTen(num - 1, counts);
}
console.log(countToTen(10, 1));

// create a recursive function that counts down from ten

function countDown(num) {
	let counts = num;
	if (num === 1) {
		return counts;
	}
	counts--;

	return countDown(num - 1);
}

console.log(countDown(10));
