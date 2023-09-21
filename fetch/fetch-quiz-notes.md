# fetch-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What does `fetch()` return?
  Returns a Promise that resolves with a Response obj.
- What is the default request method used by `fetch()`?
  GET
- How do you specify the request method (`GET`, `POST`, etc.) when calling `fetch`?
  In your fetch() call you would pass your object as the second argument and specifiy the request method you want to use in caps and double quotes.

ex) const response = await fetch(url, {
method: "POST" etc..
})

- How does `fetch` report errors?
  A fetch() promise will reject with a TypeError when a network error is encountered.
  Would check if the promise resolved, then checking if the res.ok property has a value of true.
  We would need to put a try...catch block to handle errors if the promise was rejected.

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
