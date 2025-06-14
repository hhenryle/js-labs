export function hasEasyFrontend(wordList) {
  if (!Array.isArray(wordList) || wordList.length === 0) return false;

  let hasEasyFlag = false;
  let hasFrontendFlag = false;
  for (const word of wordList) {
    if (word === 'easy frontend') return true;
    if (word === 'easy') hasEasyFlag = true;
    if (word === 'frontend') hasFrontendFlag = true;
  }

  return hasEasyFlag && hasFrontendFlag;
}
