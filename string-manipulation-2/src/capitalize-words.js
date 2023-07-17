/* exported capitalizeWords */

function capitalizeWords(string) {
  let words = '';
  let capNext = true;

  for (let i = 0; i < string.length; i++) {
    const char = string[i];
    if (capNext) {
      words += char.toUpperCase();
    } else {
      words += char.toLowerCase();
    }
    capNext = char === ' ';
  }
  return words;
}
