function shellSort(data) {
	if (data.length <= 1) {
		return data;
	}

	let increase = Math.floor(data.length / 2);

	while (increase != 0) {
		let curr = increase;

		while (curr < data.length) {
			let temp = data[curr];
			let i = curr - increase;

			while (i >= 0 && temp < data[i]) {
				data[i + increase] = data[i];
				i = i - increase;
			}

			data[i + increase] = temp;
			curr++;
		}

		increase / 2;
	}

	return data;
}

console.log(shellSort([45, 3, 5, 8]));
