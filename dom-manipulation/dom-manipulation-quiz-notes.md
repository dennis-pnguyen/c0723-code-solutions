# dom-manipulation-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the `className` property of element objects?
  Gets and sets the value of the class attribute of the specified element
- How do you update the CSS class attribute of an element using JavaScript?
  className
- What is the `textContent` property of element objects?
  represents the text conent of the node and it's descendants
- How do you update the text within an element using JavaScript?
  text.Content plus the new value
- Is the `event` parameter of an event listener callback always useful?
  Not always, as there are many events happening at any given moment on a page, it may be useful to keep track of when a particular event happens by adding an event listener.
- Would this assignment be simpler or more complicated if we didn't use a variable to keep track of the number of clicks?
  more complicated, we would not have an idea of how many times we recorded a click.
- Why is storing information about a program in variables better than only storing it in the DOM?
  It would be easier in terms of memory to store program in variables so that we're not re-selecting selectors within the DOM.

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
