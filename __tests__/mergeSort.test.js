import mergeSort from "../mergeSort";

describe("mergeSort", () => {
	it("should return an empty array if the input is an empty array", () => {
		expect(mergeSort([])).toEqual([]);
	});
	it("should return the same array if it has only one element", () => {
		expect(mergeSort([42])).toEqual([42]);
	});
	it("should correctly sort an array with two numbers in ascending order", () => {
		expect(mergeSort([4, 1])).toEqual([1, 4]);
	});
	it.skip("should correctly sort an array with an odd number of elements in ascending order", () => {
		expect(mergeSort([4, 1, 6])).toEqual([1, 4, 6]);
	});
	it.skip("should correctly sort an array with numbers in ascending order", () => {
		expect(mergeSort([3, 2, 1, 13, 8, 5, 0, 1])).toEqual([0, 1, 1, 2, 3, 5, 8, 13]);
		expect(mergeSort([105, 79, 100, 110])).toEqual([79, 100, 105, 110]);
	});
	it.skip("should correctly sort an array with negative numbers in ascending order", () => {
		expect(mergeSort([-3, -2, -5, -1, -8])).toEqual([-8, -5, -3, -2, -1]);
	});
});
