export function findSecondLargestNumber(numberList) {
  if (!Array.isArray(numberList) || numberList.length < 2) return undefined;

  let secondLargestNumber = Number.NEGATIVE_INFINITY;
  let largestNumber = Number.NEGATIVE_INFINITY;

  numberList.forEach((number) => {
    if (number > largestNumber) {
      secondLargestNumber = largestNumber;
      largestNumber = number;
    }
  });

  return secondLargestNumber;
}
