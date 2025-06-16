export function findLongestWord(wordList) {
  if (!Array.isArray(wordList) || wordList.length === 0) return '';

  let longestWord = '';
  wordList.forEach((word) => {
    if (!word.includes(' ') && word.length <= 5 && word.length > longestWord.length) {
      longestWord = word;
    }
  });

  return longestWord;
}
