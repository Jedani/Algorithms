import { swap } from "../swap/swap.js";

function quickSort(data, start, end) {
	if (start >= end) {
		return;
	}

	let index = partition(data, start, end);

	quickSort(data, start, index - 1);
	quickSort(data, index + 1, end);

	// function swap(arr, a, b) {
	// 	let temp = arr[a];
	// 	arr[a] = arr[b];
	// 	arr[b] = temp;
	// }
	function partition(data, start, end) {
		let pivotInd = start;
		let pivotVal = data[end];

		for (let i = start; i < end; i++) {
			if (data[i] < pivotVal) {
				swap(data, i, pivotInd);
				pivotInd++;
			}
		}
		swap(data, pivotInd, end);
		return pivotInd;
	}
	return data;
}

let array = [2, 3, 4, 1, 2, 8, 90, 78, 5];

console.log(quickSort(array, 0, array.length - 1));
