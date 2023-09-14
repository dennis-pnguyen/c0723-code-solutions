# javascript-conditionals-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- In JavaScript, when is scope determined?
  Scope is determined at the time a function is declared. (lexical scope)
- What allows JavaScript functions to "remember" variables from their surroundings?
  Closure - think of this as a backpack that stores variables from the surround scope. This is captured when the function is defined.
- What values does a closure contain?
  Inner function - that was defined within the function
- When is a closure created?
  At function definition.
- How can you tell if a function will be created with a closure?
  n JavaScript, a function will be created with a closure when it is defined within another function, and it references variables or functions from the outer (enclosing) function's scope.
- In React, what is one important case where you need to know if a closure was created?
  with the useEffect hook to prevent stale or infinite re-renders.

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
