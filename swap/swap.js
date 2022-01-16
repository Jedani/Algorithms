export function swap(arr, a, b) {
	let temp = arr[a];
	arr[b] = arr[a];
	arr[b] = temp;
}
