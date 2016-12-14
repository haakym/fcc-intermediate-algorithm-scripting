// https://www.freecodecamp.com/challenges/sum-all-odd-fibonacci-numbers

function sumFibs(num) {
    let sequence = fibUntil(num, []);

	return sequence
        .filter((item) => (item % 2) === 1)
		.reduce((sum, item) => sum + item, 0);
}

function fibUntil(num, sequence) {
	if (sequence.length < 2) {
		sequence.push(1);
		return fibUntil(num, sequence);
	}
	
	const nextSequence = sequence[sequence.length - 1] + sequence[sequence.length - 2];

    if (nextSequence > num) {
      return sequence;
    }
  
    sequence.push(nextSequence);

    return fibUntil(num, sequence);
}
