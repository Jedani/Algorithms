var merge = function (intervals) {
	if (intervals.length < 1) {
		return intervals;
	}
	intervals.sort(function (a, b) {
		return a[0] - b[0];
	});
	let curr = [intervals[0]];
	for (let interval of intervals) {
		let end = curr[curr.length - 1][1];
		let begPointer = interval[0];
		let pointer = interval[1];
		if (end >= begPointer) {
			curr[curr.length - 1][1] = Math.max(end, pointer);
		} else {
			curr.push(interval);
		}
	}
	return curr;
};

console.log(
	merge([
		[1, 3],
		[2, 6],
		[8, 10],
		[15, 18],
	]),
);
