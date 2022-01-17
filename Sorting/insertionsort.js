function insertionSort(data) {
	if (data.length <= 1) {
		return data;
	}

	unsorted = 1;

	while (unsorted < data.length) {
		let temp = data[unsorted];
		let i = unsorted - 1;

		while (i >= 0 && temp < data[i]) {
			data[i + 1] = data[i];
			i--;
		}

		data[i + 1] = temp;
		unsorted++;
	}
	return data;
}

let arr = [4, 3, 2, 1, 5];
console.log(insertionSort(arr));
