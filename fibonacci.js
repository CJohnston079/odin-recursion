const fibonacci = function (n) {
	if (n === 0) {
		return [];
	} else if (n === 1) {
		return [0];
	}

	const fib = [0, 1];

	for (let i = 2; i < n; i += 1) {
		const nextNum = fib[fib.length - 1] + fib[fib.length - 2];

		fib.push(nextNum);
	}

	return fib;
};

const fibRec = function (n, sequence = [0, 1]) {
	if (n === 0) {
		return [];
	} else if (n === 1) {
		return [0];
	}

	if (sequence.length >= n) {
		return sequence.slice(0, n);
	}

	const nextNum = sequence[sequence.length - 1] + sequence[sequence.length - 2];

	sequence.push(nextNum);

	return fibRec(n, sequence);
};

export { fibonacci, fibRec };
