function generateNumberInRange(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') return [];
  if (b < a) return [];

  const result = [];

  for (let i = a; i <= b; i++) {
    result.push(i);
  }

  return result;
}

function generateNumberInRangeV2(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') return [];
  if (b < a) return [];

  return Array.from({ length: b - a + 1 }, (_, i) => a + i);
}
