export function isPerfectSquare(n) {
  if (n <= 0 || n >= 1000000) return false;

  const sqrtNInt = Math.floor(Math.sqrt(n));

  return sqrtNInt * sqrtNInt === n;
}
