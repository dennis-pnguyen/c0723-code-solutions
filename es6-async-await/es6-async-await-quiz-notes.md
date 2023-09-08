# es6-async-await-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are the `async` and `await` keywords used for?
  Adding async to the beginning of a function makes it an async function
  Await forces asynchronous operations to be completed in series.
- How do `async` and `await` differ from `Promise.then` and `Promise.catch`?
  More concise way to work with promises, helps with error handling because of code readability
  Then keyword is used with Promises and lets you specify what happens after a Promise is fulfilled.
- When do you use `async`?
  When you want to define a function that performs asynchronous operations to minimize promise chaining
- When do you use `await`? When do you _not_ use `await`? (What happens if you `await` a synchronous function?)
  Await is used for to wait for promise function
  Not use await for promise function
  No effect
- How do you handle errors with `await`?
  with a try-catch block
- What do `try`, `catch` and `throw` do? When do you use them?
  Code in Try block is executed, if an excpetion is thrown, catch block is executed.
- What happens if you forget to use `await` on a Promise? In that case, what happens to the Promise rejection?
  I believe the code still runs but nothing happens
- Which style of asynchronous programming do you prefer — callbacks, `Promise.then`, or `async/await`? Why?
  async await; syntactically looks much cleaner and more concise.

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
