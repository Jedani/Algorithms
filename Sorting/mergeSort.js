function mergeSort(data, start, end) {
	if (start < end) {
		let mid = Math.floor((start + end) / 2);
		mergeSort(data, start, mid);
		mergeSort(data, mid + 1, end);
		merge(data, start, mid, end);
	}
	function merge(data, start, mid, end) {
		//build a temporary array
		let temp = [end - start + 1];

		let i = start,
			j = mid + 1,
			k = 0;

		while (i <= mid && j <= end) {
			if (data[i] <= data[j]) {
				temp[k++] = data[i++];
			} else {
				temp[k++] = data[j++];
			}
		}

		while (i <= mid) {
			temp[k] = data[i];
			k++;
			i++;
		}

		while (j <= end) {
			temp[k] = data[j];
			k++;
			j++;
		}

		for (i = start; i <= end; i++) {
			data[i] = temp[i - start];
		}
	}
	return data;
}

let array = [4, 75, 74, 2, 54];
console.log(mergeSort(array, 0, array.length - 1));
