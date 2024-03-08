const mergeSort = function (arr) {
	if (arr.length <= 1) {
		return arr;
	}

	const leftHalf = arr.slice(0, Math.floor(arr.length / 2));
	const rightHalf = arr.slice(Math.floor(arr.length / 2));

	return merge(mergeSort(leftHalf), mergeSort(rightHalf));
};

const merge = function (left, right) {
	let result = [];
	let leftIndex = 0;
	let rightIndex = 0;

	while (leftIndex < left.length && rightIndex < right.length) {
		if (left[leftIndex] < right[rightIndex]) {
			result.push(left[leftIndex]);
			leftIndex += 1;
		} else {
			result.push(right[rightIndex]);
			rightIndex += 1;
		}
	}

	return [...result, ...left.slice(leftIndex), ...right.slice(rightIndex)];
};

export default mergeSort;
