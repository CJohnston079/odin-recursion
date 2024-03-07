import { fibonacci, fibRec } from "../fibonacci";

describe.each([
	[3, [0, 1, 1]],
	[0, []],
	[1, [0]],
	[2, [0, 1]],
	[5, [0, 1, 1, 2, 3]],
	[8, [0, 1, 1, 2, 3, 5, 8, 13]],
])("fibonacci", (n, expected) => {
	it(`returns an array with the correct sequence where n = ${n}`, () => {
		const result = fibonacci(n);
		expect(result).toEqual(expected);
	});

	it(`returns an array with the correct sequence (recursive) where n = ${n}`, () => {
		const result = fibRec(n);
		expect(result).toEqual(expected);
	});
});
