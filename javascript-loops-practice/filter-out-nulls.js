/* exported filterOutNulls */

function filterOutNulls(values) {
  const newVal = [];
  for (let i = 0; i < values.length; i++) {
    if (values[i] != null) {
      newVal.push(values[i]);
    }
  }
  return newVal;
}
