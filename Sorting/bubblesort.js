const bubblesort = (array) => {
	function swap(array, j) {
		if (array[j] < array[j - 1]) {
			let temp = array[j];
			array[j] = array[j - 1];
			array[j - 1] = temp;
		}
	}

	for (let i = 0; i < array.length; i++) {
		for (let j = 1; j < array.length; j++) {
			swap(array, j);
		}
	}
	console.log(array);
	return array;
};

bubblesort([11, 9, 8, 7, 60, 4, 3, 2]);
