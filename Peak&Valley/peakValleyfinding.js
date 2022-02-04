const peakValley = (arr) => {
	arr.sort();
	function swap(array, a, b) {
		let temp = array[a];
		array[a] = array[b];
		array[b] = temp;
	}

	for (i = 1; i < arr.length; i += 2) {
		swap(arr, i - 1, i);
	}
	return arr;
};

console.log(peakValley([5, 6, 0, 3, 2, 9]));
