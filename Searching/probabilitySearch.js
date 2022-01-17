function swap(arr, a, b) {
	let temp = arr[a];
	arr[a] = arr[b];
	arr[b] = temp;
}

function probSearch(list, item) {
	if (list.length == 0) {
		return;
	}

	let i = 0;

	while (i < list.length && list[i] !== item) {
		i++;
	}
	if (i >= list.length || list[i] !== item) {
		return false;
	}

	if (i > 0) {
		swap(list[i], list[i - 1]);
	}
	let a = ["true", "at index " + i];

	return a;
}

console.log(probSearch([1, 23, 45, 6, 2, 8, 90, 6], 2));
