// Implement map function in Array

function map(arr, callbackFn) {
  if (!Array.isArray(arr) || typeof callbackFn !== 'function') return undefined;

  const newArray = [];

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    const newElement = callbackFn(element, i);
    newArray.push(newArray);
  }

  return newArray;
}
