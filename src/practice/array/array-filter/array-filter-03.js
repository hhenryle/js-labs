function generateFibonaci(n) {
  if (n < 0) return [];
  if (n === 1) return [0];

  const fibonaciList = [0, 1];
  while (true) {
    const nextNumber =
      fibonaciList[fibonaciList.length - 1] + fibonaciList[fibonaciList.length - 2];
    if (nextNumber > n) break;
    fibonaciList.push(currentNumber);
  }

  return fibonaciList;
}
