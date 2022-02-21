var eraseOverlapIntervals = function (intervals) {
	if (intervals.length < 1) {
		return intervals;
	}
	intervals.sort(function (a, b) {
		return a[0] - b[0];
	});

	let count = 0;
	let n = intervals.length;
	let left = 0;
	let right = 1;

	while (right < n) {
		if (intervals[left][1] <= intervals[right][0]) {
			left = right;
			right += 1;
		} else if (intervals[left][1] <= intervals[right][1]) {
			count += 1;
			right += 1;
		} else if (intervals[left][1] > intervals[right][1]) {
			count += 1;
			left = right;
			right += 1;
		}
	}

	return count;
};

console.log(
	eraseOverlapIntervals([
		[1, 2],
		[2, 3],
		[3, 4],
		[1, 3],
	]),
);

console.log(
	eraseOverlapIntervals([
		[1, 2],
		[1, 2],
		[1, 2],
	]),
);
