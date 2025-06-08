export function isIncreasingNumberByDistance(n, x) {
  if (n < 10 || n >= 1000000) return false;

  let remaining = n;
  let prevDigit = remaining % 10;
  remaining = Math.trunc(remaining / 10);

  while (remaining > 0) {
    let currentDigit = remaining % 10;
    if (currentDigit >= prevDigit || prevDigit - currentDigit !== x) return false;

    prevDigit = currentDigit;
    remaining = Math.trunc(remaining / 10);
  }

  return true;
}
