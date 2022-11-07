const Sort = (() => {
	function mergeSort(arr) {
		if (arr.length === 0) return [];

		if (arr.length <= 1) {
			return arr;
		} else {
			const start = 0;
			const end = arr.length - 1;
			let mid = Math.round((start + end) / 2);

			let left = mergeSort(arr.slice(start, mid));
			let right = mergeSort(arr.slice(mid, end + 1));

			return merge(left, right);
		}
	}

	function merge(left, right) {
		let i = 0;
		let j = 0;
		let k = 0;
		let arr = [];

		while (i < left.length && j < right.length) {
			if (left[i] > right[j]) {
				arr[k] = right[j];
				j++;
				k++;
			} else {
				arr[k] = left[i];
				i++;
				k++;
			}
		}

		while (j < right.length) {
			arr[k] = right[j];
			j++;
			k++;
		}

		while (i < left.length) {
			arr[k] = left[i];
			i++;
			k++;
		}

		return arr;
	}

    return {mergeSort};
})();

export default Sort;