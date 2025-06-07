const result = [2, 6, 8].reduce((sum, number) => sum + number);

console.log(result);

// Implement reduce function in Array

function reduce(arr, callbackFn, initialValue) {
  if (!Array.isArray(arr) || typeof callbackFn !== 'function') {
    throw new Error('Invalid parameters');
  }

  if (arr.length === 0) {
    if (initialValue === undefined) {
      throw new Error('Should have initial value when array is empty');
    }

    return initialValue;
  }

  const hasInitialValue = initialValue !== undefined;
  const startIndex = hasInitialValue ? 0 : 1;
  let accumulator = hasInitialValue ? initialValue : arr[0];

  for (let i = startIndex; i < arr.length; i++) {
    accumulator = callbackFn(accumulator, arr[i], i);
  }

  return accumulator;
}
