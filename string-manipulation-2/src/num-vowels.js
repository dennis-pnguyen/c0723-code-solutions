/* exported numVowels */

function numVowels(string) {
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    const char = string[i].toLowerCase();
    if (
      char === 'a' ||
      char === 'e' ||
      char === 'i' ||
      char === 'o' ||
      char === 'u'
    ) {
      count++;
    }
  }
  return count;
}
