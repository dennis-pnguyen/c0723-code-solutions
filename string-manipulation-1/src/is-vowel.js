/* exported isVowel */

function isVowel(char) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  const lowercaseChar = char.toLowerCase();
  return vowels.includes(lowercaseChar);
}
