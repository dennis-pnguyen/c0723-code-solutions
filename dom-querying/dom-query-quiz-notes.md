# dom-query-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- Why do we log things to the console?
  to help with debugging, to show us what object's we're interacting with

- What is a "model"?

- Which "document" is being referred to in the phrase Document Object Model?
  All page content as objects which can be modified
- What is the word "object" referring to in the phrase Document Object Model?
  Any HTML Tags within our document
- What is a DOM Tree?
  The outline of the different element nodes (tree structure) and children elements
- Give two examples of `document` methods that retrieve a single element from the DOM.
  getElementById or querySelector
- Give one example of a `document` method that retrieves multiple elements from the DOM at once.
  querySelectorAll
- Why might you want to assign the return value of a DOM query to a variable?
  naming conflicts within ids or classes of elements
- What `console` method allows you to inspect the properties of a DOM element object?
  console.dir()
- Why would a `<script>` tag need to be placed at the bottom of the HTML content instead of at the top?
  Our browsers needs to parse through all of our HTML elements before JS can access them.
- What does `document.querySelector()` take as its argument and what does it return?
  CSS selectors string , returns the first element in the document that matches the set of CSS selectors or NULL if no matches
- What does `document.querySelectorAll()` take as its argument and what does it return?
  String containing one or more selectors to match against, multiple selectors can be provided with a comma. Returtns, non-live NodeList containing one element obj for each element that matches one of the specified selectors

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
