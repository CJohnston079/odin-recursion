const fibonacci = function (n) {
	if (n === 0) {
		return [];
	}

	if (n === 1) {
		return [0];
	}

	const fib = [0, 1];

	for (let i = 2; i < n; i += 1) {
		const nextNum = fib[fib.length - 1] + fib[fib.length - 2];

		fib.push(nextNum);
	}

	return fib;
};

export default fibonacci;
