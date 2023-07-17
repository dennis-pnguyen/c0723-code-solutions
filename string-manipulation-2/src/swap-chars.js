/* exported swapChars */

function swapChars(firstIndex, secondIndex, string) {
  const swapArray = string.split('');
  const swap = swapArray[firstIndex];
  swapArray[firstIndex] = swapArray[secondIndex];
  swapArray[secondIndex] = swap;

  let newStr = '';
  for (let i = 0; i < swapArray.length; i++) {
    newStr += swapArray[i];
  }
  return newStr;
}
