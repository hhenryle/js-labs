function generatePrimeNumbers(n) {
  if (n <= 2 || n >= 1000) return [];
  const result = [];

  for (let i = 2; i < n; i++) {
    if (isPrimeNumber(i)) result.push(i);
  }

  return result;
}

function isPrimeNumber(n) {
  if (n < 2) return false;

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }

  return true;
}
