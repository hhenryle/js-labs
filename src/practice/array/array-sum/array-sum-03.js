export function sumAllMinDigits(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return 0;

  return numberList.reduce((sum, number) => sum + getMinDigit(number), 0);
}

function getMinDigit(number) {
  const numberString = Math.abs(number).toString();
  let min = Number.parseInt(numberString.charAt(0));

  for (let i = 1; i < numberString.length; i++) {
    const digit = Number.parseInt(numberString.charAt(i));
    if (digit < min) min = digit;
  }

  return min;
}
