import fibonacci from "../fibonacci";

describe("fibonacci", () => {
	it("returns an array", () => {
		const result = fibonacci(3);
		expect(Array.isArray(result)).toBe(true);
	});
	it("returns an empty array when n is 0", () => {
		const result = fibonacci(0);
		expect(result).toEqual([]);
	});
	it("returns an array with the correct sequence where n = 1", () => {
		const result = fibonacci(1);
		expect(result).toEqual([0]);
	});
	it("returns an array with the correct sequence where n = 2", () => {
		const result = fibonacci(2);
		expect(result).toEqual([0, 1]);
	});
	it("returns an array with the correct sequence where n = 5", () => {
		const result = fibonacci(5);
		expect(result).toEqual([0, 1, 1, 2, 3]);
	});
	it("returns an array with the correct sequence where n = 8", () => {
		const result = fibonacci(8);
		expect(result).toEqual([0, 1, 1, 2, 3, 5, 8, 13]);
	});
});
