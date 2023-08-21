# es6-arrow-functions-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the syntax for defining an arrow function?
  (parameter) => {statement}
- When an arrow function's body is not surrounded in curly braces (_concise body syntax_), what changes in its functionality?
  Without curly braces, the expression following the arrow is implicitly returned without the use of the keyword 'return.'
  ALlows only a single expression without curly braces.
- When using _concise body syntax_, how do you return an object literal?
  let object = obj => ({property:value});
- In the expression
  `js
    foo(() => 42);
    `
  - Identify the arrow function
    () => 42
  - How many arguments does the arrow function take?
    no arguments
  - What value does it return?
    42
  - How many arguments are passed to the function `foo`?
    one argument
  - What type of argument is passed to the function `foo`?
    arrow function
- In the expression
  `` js
    bar((y) => {
      console.log(`4y = ${4 * y}`);
    });
     `` - Identify the arrow function
  (y) => {console.log(`4y = ${4 * y}`);}

      - How many arguments does the arrow function take?

  One, y - What value does it return?
  undefined - How many arguments are passed to the function `bar`?
  One - What type of argument is passed to the function `bar`?
  the arrow function - When does the arrow function's code get executed?
  Whenever it is called within the bar function

- How does the value of `this` differ between standard functions and arrow functions?
  it's lexically scoped and inherits the value from the surrounding context where the arrow function was defined.

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```javascript
const data = 'Howdy';
```

for HTML:

```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:

```css
div {
  width: 100%;
}
```
