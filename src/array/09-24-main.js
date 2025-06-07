// Viết hàm isAllPerfectNumbers(numberList) nhận vào mảng số nguyên dương.
// Trả về true nếu tất cả đều là số hoàn hảo, ngược lại trả về false.
// Ví dụ:
// isAllPerfectNumbers([]) --> false
// isAllPerfectNumbers([1, 6]) --> false vì 1 không phải là số hoàn hảo
// isAllPerfectNumbers([1, 2, 3]) --> false
// isAllPerfectNumbers([6]) --> true vì 6 là số hoàn hảo
// isAllPerfectNumbers([6, 28]) --> true vì 6 và 28 đều là số hoàn hảo
// Viết hàm bằng 3 cách khác nhau:
// isAllPerfectNumbersV1(numberList) Sử dụng for...i với cách tiếp cận là return false nếu phát hiện có một số ko phải là số hoàn hảo.
// isAllPerfectNumbersV2(numberList) Sử dụng reduce() với cách tiếp cận là đếm số lượng số hoàn hảo, nếu nó bằng với length của array, nếu bằng thì return true, ngược lại return false
// isAllPerfectNumbersV3(numberList) Sử dụng every()

function isPerfectNumber(n) {
  if (n <= 1) return false;

  let sum = 0;
  for (let i = 1; i < n / 2; i++) {
    if (n % i === 0) sum += i;
  }

  return sum === n;
}

function isAllPerfectNumbersV1(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return false;

  for (let i = 0; i < numberList.length; i++) {
    if (!isPerfectNumber(numberList[i])) return false;
  }

  return true;
}

function isAllPerfectNumbersV2(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return false;

  const quantityPerfecNumbers = numberList.reduce((count, number) =>
    isPerfectNumber(number) ? ++count : count,
  );

  return quantityPerfecNumbers === numberList.length;
}

function isAllPerfectNumbersV2(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return false;

  return numberList.every((number) => isPerfectNumber(number));
}
