// Write a function to find max
// for i
// forEach
// reduce

function findMax(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return undefined;

  let max = numberList[0];
  for (let i = 1; i < numberList.length; i++) {
    if (numberList[i] > max) max = numberList[i];
  }

  return max;
}

console.log(findMax([2, 5, 3, 11]));

// forEach
function findMaxV2(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return undefined;

  let max = numberList[0];
  numberList.forEach((number) => {
    if (number > max) max = number;
  });

  return max;
}

//reduce
function findMaxV3(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return undefined;

  const result = numberList.reduce((max, number) => (number > max ? number : max));

  return result;
}

console.log(findMaxV3([2, 5, 3, 11]));
