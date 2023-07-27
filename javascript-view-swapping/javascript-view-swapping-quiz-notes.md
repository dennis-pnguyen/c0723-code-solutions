# javascript-view-swapping-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the `event.target`?
  reference to the object onto which the event was dispatched
- What is the affect of setting an element to `display: none`?
  turns off the display of an element so that it has no effect on layout. all descendant elements also have their display turned off.
- What does the `element.matches()` method take as an argument and what does it return?
  selector, returns boolean if element matches or not.
- How can you retrieve the value of an element's attribute?
  getAttribute()
- At what steps of the solution would it be helpful to log things to the console?
  At Step 4( check if your event.target matches a click on a tab.)
- If you were to add another tab and view to your HTML, but you didn't use event delegation, how would your JavaScript code be written instead?
  I would have another tab in the HTML document and would have to add multiple event listeners to capture and make sure that our event was actually getting fired and triggered.
- If you didn't use a loop to conditionally show or hide the views in the page, how would your JavaScript code be written instead?
  You would probably have to write multiple conditional statements in order to check whether or not your event was fired and if so, you'd need to write even more statements to hide/unhide certain aspects of the page and it would start to get cumbersome and messy.

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
