// Viết hàm createArrayInRange(a, b) để tạo ra mảng gồm các số nằm trong khoảng [a, b] (có bao gồm a và b)
// Với a, b là các số thoả điều kiện sau: -100 < a < b < 100
// Trả về là một array chứa các số trong khoảng từ a tới b.
// Ví dụ:
// createArrayInRange(1, 5) --> [1, 2, 3, 4, 5]
// createArrayInRange(-2, 1) --> [-2, -1, 0, 1]
// Hãy viết bài này bằng 2 cách:
// Dùng for...i createArrayInRangeV1(a, b)
// Dùng Array.from() createArrayInRangeV2(a, b)

function createArrayInRange(a, b) {
  if (a <= -100 || a > b || b >= 100) return [];

  const result = [];
  for (let i = a; i <= b; i++) {
    result.push(i);
  }

  return result;
}

console.log(createArrayInRange(1, 5));
console.log(createArrayInRange(-2, 1));

function createArrayInRangeV2(a, b) {
  if (a <= -100 || a > b || b >= 100) return [];

  return Array.from({ length: b - a + 1 }, (_, i) => a + i);
}

console.log(createArrayInRangeV2(1, 5));
console.log(createArrayInRangeV2(-2, 1));
