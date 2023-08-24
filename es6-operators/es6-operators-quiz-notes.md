# es6-operators-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are the `&&` (logical AND) and `||` (logical OR) operators and how can they be used outside of `if` statements?
  Logical && operator returns first falsy operand it encounters or last operand if all operands are truthy.
  Logical || operator returns first truthy operand it encounters or last operand if all operands are falsy. Often used to provide default value when first operand is falsy.
- What is "short-circuit evaluation" and how does it apply to `&&` and `||`?
  The concept that these operators do not always need to evaluate both operands in order to determine the final result of the expression.
  && - if first operand is falsy - expression result will be false, regardless of the value of second operand
  || - if first operand is truthy - expression result will be true.
- What is the `??` (nullish coalescing) operator and how does it differ from `||`?
  Logical operator that returns its right hand side operand when it's left hand side operand is 'null' or 'undefined.
- What is the `?:` (ternary) operator? How does it differ from `if/else`?
  operator that takes 3 operands (condition ? :) used as an alternative to if...else
- What is the `?.` (optional chaining) operator? When would you use it?
  Operator that accesses an object's property or calls a function.
- What is `...` (spread) syntax? How do you use it with arrays and objects?
  Allows an iterable, such as an array or string to be expanded in places where zero or more arugments or elements are expected.
- What data types can be spread into an array? Into an object?
  Arrays, strings, NodeLists
  Objects, Arrays,
- How does spread syntax differ from rest syntax?
  Spread syntax 'expands' an array into its elements, rest syntax collects multiple elements and 'condenses' them into a single element.

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```js
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
