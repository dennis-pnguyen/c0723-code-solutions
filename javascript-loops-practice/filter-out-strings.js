/* exported filterOutStrings */

function filterOutStrings(values) {
  const newArr = [];
  for (let i = 0; i < values.length; i++) {
    if (typeof values[i] !== typeof '') {
      newArr.push(values[i]);
    }
  }
  return newArr;
}
