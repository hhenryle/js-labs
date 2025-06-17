export function sumEvenNumbers(numberList) {
  if (!Array.isArray(numberList) || numberList.length <= 1) return 0;

  let sum = 0;

  for (let i = 1; i < numberList.length; i++) {
    const prevNumber = numberList[i - 1];
    const number = numberList[i];
    if (number % 2 === 0 && number > prevNumber) sum += number;
  }

  return sum;
}
