export function isIncreasingNumber(n) {
  if (n < 12 || n >= 1000000) return false;

  let remaining = n;
  let prevDigit = 10;

  while (remaining > 0) {
    const lastDigit = remaining % 10;
    if (lastDigit >= prevDigit) return false;

    prevDigit = lastDigit;
    remaining = Math.trunc(remaining / 10);
  }

  return true;
}

export function isIncreasingNumberV2(n) {
  if (n < 12 || n >= 1000000) return false;

  const numberString = n.toString();
  for (let i = 1; i < numberString.length; i++) {
    if (numberString[i] <= numberString[i - 1]) return false;
  }

  return true;
}
