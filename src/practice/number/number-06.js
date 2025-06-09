export function isPerfectNumber(n) {
  if (n <= 1 || n >= 1000) return false;

  let sum = 0;
  for (let i = 1; i <= n / 2; i++) {
    if (n % i === 0) {
      sum += i;
    }
  }

  return sum === n;
}
