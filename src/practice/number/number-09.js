export function hasTwoDigitsWithSum(n, sum) {
  if (n <= 9 || n >= 1000000) return false;
  if (sum <= 0 || sum >= 19) return false;

  let remaining = n;
  let sumOfDigits = 0;
  while (remaining > 0) {
    let lastDigit = remaining % 10;
    sumOfDigits += lastDigit;
    remaining = Math.floor(remaining / 10);
  }

  return sumOfDigits === sum;
}

export function hasTwoDigitsWithSumV2(n, sum) {
  if (n <= 9 || n >= 1000000) return false;
  if (sum <= 0 || sum >= 19) return false;

  const numberString = n.toString();
  const sumOfDigits = numberString.split('').reduce((sum, n) => sum + Number.parseInt(n), 0);

  return sumOfDigits === sum;
}
