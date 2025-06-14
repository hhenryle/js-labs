export function hasFibonaciNumber(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return false;

  const fibonaciList = generateFibonaciList(100);

  return numberList.some((number) => fibonaciList.includes(number));
}

function generateFibonaciList(n) {
  if (n < 0) return [];
  if (n === 1) return [0];
  if (n === 2) return [0, 1, 1];

  const fibonaciList = [0, 1];
  let currentNumber = fibonaciList[fibonaciList.length - 1] + fibonaciList[fibonaciList.length - 2];

  while (currentNumber < n) {
    fibonaciList.push(currentNumber);
    currentNumber = fibonaciList[fibonaciList.length - 1] + fibonaciList[fibonaciList.length - 2];
  }

  return fibonaciList;
}
