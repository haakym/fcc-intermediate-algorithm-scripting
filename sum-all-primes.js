// https://www.freecodecamp.com/challenges/sum-all-primes


function sumPrimes(num) {
  let primes = getPrimes(3, num, [2]);

  return primes.reduce((sum, item) => sum + item, 0);
}

function getPrimes(current, limit, primes) {
  if (current > limit) return primes;

  const isAPrime = primes.every(prime => (current % prime) !== 0);

  if (isAPrime) {
    primes.push(current);
  }
	
  return getPrimes(current + 1, limit, primes);
}
