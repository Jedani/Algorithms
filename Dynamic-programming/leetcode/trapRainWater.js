const trap = (height) => {
	let n = height.length;
	if (n < 3) {
		return 0;
	}
	let maxLeft = height[0];
	let maxRight = height[n - 1];

	let trappedWater = 0;

	let leftPointer = 1;
	let rightPointer = n - 2;

	while (leftPointer <= rightPointer) {
		if (maxLeft < maxRight) {
			if (height[leftPointer] >= maxLeft) {
				maxLeft = height[leftPointer];
			} else {
				trappedWater += maxLeft - height[leftPointer];
			}
			leftPointer += 1;
		} else {
			if (height[rightPointer] > maxRight) {
				maxRight = height[rightPointer];
			} else {
				trappedWater += maxRight - height[rightPointer];
			}
			rightPointer -= 1;
		}
	}
	return trappedWater;
};

console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));
