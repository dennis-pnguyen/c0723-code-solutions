# es6-promises-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the Event Queue model of Promises?
  Main execution context - synchronous code is executed sequentially in this context
  Async operations - making a network request, reading a file; JS continues to execute other code while these tasks are in progress
  Callback functions - handle results of the async operations. In context of Promises: .then() or .catch()
  Event Queue - when async operation is finished, its corresponding callback function is placed in the event queue.
  Event Loop - JS engine checks the event queue. If there is a task in the queue, it dequeues and executes.
- What are the three states a Promise can be in?
  pending - initial state, neither fulfilled nor rejected
  fulfilled - meaningthat the operation was completed successfully
  rejected - meaning that the opeation failed
- How do you handle the fulfillment of a Promise?
  .then() - returns a Promise object; is always pending when returned regardless of the status
- How do you handle the rejection of a Promise?
  .catch() - you can specify what happens after a rejection.

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
