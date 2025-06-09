export function isPrime(n) {
  if (n < 2 || n >= 1000000) return false;
  if (n === 2) return true;

  const sqrtNInt = Math.trunc(Math.sqrt(n));

  for (let i = 2; i <= sqrtNInt; i++) {
    if (n % i === 0) return false;
  }

  return true;
}
