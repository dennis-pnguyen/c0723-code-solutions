function ExampleConstructor() {}
console.log('value of prototype ExampleConstructor:', ExampleConstructor);
console.log('typeof prototype ExampleConstructor:', typeof ExampleConstructor);

const newFunction = new ExampleConstructor();
console.log('value of newFunction:', newFunction);
console.log(
  'newFunction instanceof ExampleConstructor:',
  newFunction instanceof ExampleConstructor
);
