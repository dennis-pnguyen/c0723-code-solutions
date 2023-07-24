# dom-events-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- Why do we log things to the console?
  help with debugging and to ensure we are working with the correct variables
- What is the purpose of events and event handling?
  events are things that happen in the system you are programming. Event handling is the response to when those events are occuring.
- Are all possible parameters required to use a JavaScript method or function?
  No, some are optional.
- What method of element objects lets you set up a function to be called when a specific type of event occurs?
  Add.Event.Listener
- What is a callback function?
  A function that is passed into another function as an argument, which is then invoked in side the outer function to complete some kind of action or routine.
- What object is passed into an event listener callback when the event fires?
  event object
- What is the `event.target`? If you weren't sure, how would you check? Where could you get more information about it?
  target element of the object that triggered the event. can check through console.log
- What is the difference between these two snippets of code?
  ```js
  element.addEventListener('click', handleClick) - passing reference of function
  ```
  ```js
  element.addEventListener('click', handleClick()) - calling function directly
  ```

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
