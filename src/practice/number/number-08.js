export function isDivisibleBy10(n) {
  if (n <= 10 || n >= 1000000) return false;

  let remaining = n;
  let sum = 0;
  while (remaining > 0) {
    let lastDigit = remaining % 10;
    sum += lastDigit;
    remaining = Math.floor(remaining / 10);
  }

  return sum % 10 === 0;
}

export function isDivisibleBy10V2(n) {
  if (n <= 10 || n >= 1000000) return false;

  const numberString = n.toString();
  const sum = numberString.split('').reduce((sum, n) => sum + Number.parseInt(n), 0);

  return sum % 10 === 0;
}
