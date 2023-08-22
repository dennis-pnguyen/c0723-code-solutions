const values = [10, 1, 22, 23, 41, 5, 18, 7, 80, 9];

values.forEach((element) => console.log(element));

values.forEach((number, index) => {
  const currentIndex = values.length - 1;
  console.log(values[currentIndex - index]);
});
