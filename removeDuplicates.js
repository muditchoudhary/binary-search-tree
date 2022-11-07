import Sort from "./sort.js";

const RemoveDuplicate = (() => {
	function removeDuplicates(arr) {
		// sort the array
		arr = Sort.mergeSort(arr);

		for (let i = 0; i < arr.length - 1; i++) {
			if (arr[i + 1] === arr[i]) {
				arr.splice(i + 1, 1);
			}
			// let targetElmIndex = binarySearch(
			// 	arr.slice(i + 1, arr.length),
			// 	arr[i]
			// );
			// if (targetElmIndex !== -1) {
			// 	arr.splice(targetElmIndex, 1);
			// }
		}
		return arr;
	}

	function binarySearch(arr, target) {
		let start = 0;
		let end = arr.length - 1;
		let mid = (start + end) / 2;

		while (start < end) {
			if (arr[mid] > target) {
				end = mid - 1;
			} else if (arr[mid] < target) {
				start = mid + 1;
			} else {
				return mid;
			}
		}
		return -1;
	}

	return { removeDuplicates };
})();

export default RemoveDuplicate;
