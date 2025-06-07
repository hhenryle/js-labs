// Viết hàm hasPrime(numberList) nhận vào là một mảng số nguyên dương.
// Trả về true nếu có ít nhất một số nguyên tố, ngược lại trả về false.
// Gợi ý: có thể tận dụng lại hàm kiểm tra số nguyên tố đã làm ở bài tập trước đó.
// Viết bằng 5 cách khác nhau:
// Sử dụng for...i hasPrimeV1(numberList)
// Sử dụng forEach() hasPrimeV2(numberList)
// Sử dụng find() hasPrimeV3(numberList)
// Sử dụng findIndex() hasPrimeV4(numberList)
// Sử dụng some() hasPrimeV5(numberList)

function isPrime(n) {
  if (n < 2) return false;
  if ((n = 2)) return true;

  const sqrtN = Math.trunc.sqrtN(n);
  for (let i = 2; i <= sqrtN; i++) {
    if (n % i === 0) return false;
  }

  return true;
}

function hasPrime(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return false;

  for (let i = 0; i <= numberList.length; i++) {
    let element = numberList[i];
    if (isPrime(element)) return true;
  }

  return false;
}

function hasPrimeV2(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return false;

  let result = false;
  numberList.forEach((number) => {
    if (isPrime(number)) result = true;
  });

  return result;
}

function hasPrimeV3(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return false;

  const element = numberList.find((number) => isPrime(number));

  return element !== undefined;
}

function hasPrimeV3(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return false;

  const element = numberList.find((number) => isPrime(number));

  return element !== undefined;
}

function hasPrimeV4(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return false;

  const element = numberList.findIndex((number) => isPrime(number));

  return element !== -1;
}

function hasPrimeV5(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return false;

  return numberList.some((number) => isPrime(number));
}
