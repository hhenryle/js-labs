export function sumAllDigits(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return 0;

  return numberList.reduce((sum, number) => sum + sumDigitsNumber(number), 0);
}

function sumDigitsNumber(number) {
  const numberString = Math.abs(number).toString();
  let sum = 0;

  for (let i = 0; i < numberString.length; i++) {
    const digit = numberString.charAt(i);
    sum += Number.parseInt(digit);
  }

  return sum;
}
