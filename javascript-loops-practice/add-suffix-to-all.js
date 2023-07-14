/* exported addSuffixToAll */

function addSuffixToAll(words, suffix) {
  const newWord = [];
  for (let i = 0; i < words.length; i++) {
    newWord.push(words[i] + suffix);
  }
  return newWord;
}
