// Write a function to find the longest word
// for ... i
// forEach
// reduce

function findLongestWord(wordList) {
  if (!Array.isArray(wordList) || wordList.length === 0) return undefined;

  let longestWord = wordList[0];
  for (let i = 1; i < wordList; i++) {
    const currentWord = wordList[i];

    if (currentWord.length > longestWord.length) longestWord = currentWord;
  }

  return result;
}

function findLongestWordV2(wordList) {
  if (!Array.isArray(wordList) || wordList.length === 0) return undefined;

  let longestWord = wordList[0];
  wordList.forEach((currentWord) => {
    if (currentWord.length > longestWord.length) longestWord = currentWord;
  });

  return longestWord;
}

function findLongestWordV3(wordList) {
  if (!Array.isArray(wordList) || wordList.length === 0) return undefined;

  const result = wordList.reduce((longestWord, currentWord) =>
    currentWord.length > longestWord.length ? currentWord : longestWord,
  );

  return result;
}
