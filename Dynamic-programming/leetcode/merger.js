const merge = (nums1, m, nums2, n) => {
	nums2.splice(n);
	nums1.splice(m);
	for (let num of nums2) {
		nums1.push(num);
	}
	function quickSort(data, start, end) {
		if (start >= end) {
			return;
		}

		let index = partition(data, start, end);

		quickSort(data, start, index - 1);
		quickSort(data, index + 1, end);

		function swap(arr, a, b) {
			let temp = arr[a];
			arr[a] = arr[b];
			arr[b] = temp;
		}
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
	quickSort(nums1, 0, nums1.length - 1);
	nums1;
};

merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6, 1, 2], 3);
