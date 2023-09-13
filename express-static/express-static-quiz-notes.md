# express-static-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the purpose of the Express Static middleware?
  To serve up static assets to our browser to reduce load times
- What does `express.static()` return?
  a middleware function that can be used with Express to serve up static assets (HTML, CSS, JS files).
- What are several examples of static files?
  CSS, HTML, JS files. Downloaded images
- What is a good way to serve application images using Express?
  Add downloaded images to your image directory within your public directory.
  link the images within your files (src=""), this allows the browser to request both code and image at the same time.

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
