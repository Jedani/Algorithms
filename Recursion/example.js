// create a recursive function that counts to ten

function countToTen(num, counts) {
	if (num === 1) {
		return counts;
	}
	let a = counts++;
	console.log(a);
	return countToTen(num - 1, counts++);
}
console.log(countToTen(10, 1));
