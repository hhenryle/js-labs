// Viết hàm transformNumbers(numberList) để biến đổi các số hiện tại của mảng numberList thành các số mới theo công thức.
// f(i) = f(i - 1) + f(i + 1) với i là index
// Tạm dịch nôm na là phần tử ở vị trí i sẽ bằng tổng của 2 phần tử bên cạnh.
// Trường hợp đầu mảng và cuối mảng sẽ bằng phần tử liền kề.
// Trường hợp mảng có ít hơn một phần tử thì sẽ giữ nguyên, không biến đổi.
// Lưu ý: mảng trả về là một mảng mới, không phải là mảng truyền vào nhé!
// Ví dụ
// transformNumbers([]) --> []
// transformNumbers([1]) --> [1]
// transformNumbers([5, 10]) --> [10, 5]
// transformNumbers([2, 4, 6, 8]) --> [4, 8, 12, 6] chú thích bên dưới
// Đặt mảng đầu vào là a, mảng trả về là b, ta có:
// b[0] = a[1] = 4 (đầu mảng)
// b[1] = a[0] + a[2] = 2 + 6 = 8
// b[2] = a[1] + a[3] = 4 + 8 = 12
// b[3] = a[2] = 6 (cuối mảng)
// Viết hàm này theo 3 cách khác nhau:

// Dùng for...i transformNumbersV1(numberList)

function transformNumbersV1(numberList) {
  if (!Array.isArray(numberList)) return undefined;

  const arrResult = [...numberList];
  if (arrResult.length <= 0) return arrResult;

  arrResult[0] = numberList[1];
  arrResult[numberList.length - 1] = numberList[numberList.length - 2];

  for (let i = 1; i < numberList.length - 1; i++) {
    arrResult[i] = numberList[i - 1] + numberList[i + 1];
  }

  return arrResult;
}
// Dùng forEach() transformNumbersV2(numberList)

function transformNumbersV2(numberList) {
  if (!Array.isArray(numberList)) return undefined;

  const arrResult = [...numberList];
  if (arrResult.length <= 0) return arrResult;

  arrResult.forEach((number, idx) => {
    if (idx === 0) arrResult[idx] = numberList[idx + 1];
    if (idx === numberList.length - 1) arrResult[idx] = numberList[idx - 1];
    if (idx !== 0 && idx !== numberList.length - 1)
      arrResult[idx] = numberList[idx - 1] + numberList[idx + 1];
  });

  return arrResult;
}

// Dùng map() transformNumbersV3(numberList)
function transformNumbersV2(numberList) {
  if (!Array.isArray(numberList)) return undefined;

  const arrResult = [...numberList];
  if (arrResult.length <= 0) return arrResult;

  arrResult = numberList.map((number, idx) => {
    if (idx === 0) return numberList[idx + 1];
    if (idx === numberList.length - 1) return numberList[idx - 1];
    if (idx !== 0 && idx !== numberList.length - 1)
      return numberList[idx - 1] + numberList[idx + 1];
  });

  return arrResult;
}
