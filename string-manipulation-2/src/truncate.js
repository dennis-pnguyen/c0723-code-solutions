/* exported truncate */

function truncate(length, string) {
  return string.slice(string[0], length) + '...';
}
