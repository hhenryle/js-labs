// Viết hàm isPerfectNumber(n) để kiểm tra n có phải là số hoàn hảo hay không?
// Với n thoả điều kiện 1 < n < 1000
// Trả về true nếu đúng, ngược lại trả về false
// Số hoàn hảo là số mà tổng của tất cả ước số (không tính chính nó, tức từ 1 đến n - 1) bằng chính nó.
// Ví dụ: 6 = 1 + 2 + 3 (như vậy 6 là một số hoàn hảo)
// Gợi ý: không nhất thiết phải chạy tới (n - 1) để tìm ra tất cả các ước số của n

function isPerfectNumber(n) {
  if (n <= 1 || n >= 1000) return false;

  let sum = 0;
  for (let i = 1; i < n; i++) {
    if (n % i === 0) sum += i;
  }

  return sum === n;
}

function isPerfectNumberV2(n) {
  if (n <= 1 || n >= 1000) return false;

  let sum = 0;
  for (let i = 1; i <= n / 2; i++) {
    if (n % i === 0) sum += i;
  }

  return sum === n;
}
