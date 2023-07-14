/* exported toObject */

function toObject(keyValuePair) {
  const valueOne = keyValuePair[0];
  const valueTwo = keyValuePair[1];
  const obj = {};

  obj[valueOne] = valueTwo;
  return obj;
}
