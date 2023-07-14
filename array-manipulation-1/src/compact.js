/* exported compact */

function compact(array) {
  const comArr = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i]) {
      comArr.push(array[i]);
    }
  }
  return comArr;
}
