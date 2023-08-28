const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const names = [
  'Ada',
  'Hedy',
  'Jean',
  'Grace',
  'Evelyn',
  'Joan',
  'Elizabeth',
  'Janese',
  'Donna',
];

const evenNumbers = numbers.filter((x) => {
  return x % 2 === 0;
});
console.log('evenNumbers:', evenNumbers);

const noD = names.filter((names) => {
  return !names.includes('d') && !names.includes('D');
});
console.log('noD', noD);
