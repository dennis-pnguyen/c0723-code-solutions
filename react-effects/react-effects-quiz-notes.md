# react-effects-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- When is a component "mounted" to the DOM?
  When it has been rendered on the screen.
- What is a React Effect?
  Effects let you run some code after rendering so you can synchronize your component with some system outside of React.
- When should you use an Effect and when should you not use an Effect?
  Effects should be used when you need to 'step out' of your React code to sync with an external system (APIs, 3rd party widgets, network, etc)
- When do Effects run?
  By default Effects run after every render.
- What function is used to declare an Effect?
  useEffect();
- What are Effect dependencies and how do you declare them?
  Dependencies tell React to skip unnecessarily re-running the effect.
  Declared via empty array initialized within the useEffect call
- Why would you want to clean up from an Effect?
  To undo any resources or actions intiated by an effect when a component is unmounted or its dependencies change.
  Helps avoid unexpected behavior
- How do you clean up from an Effect?
  by passing a clean up function.
  return () => { some code }
- When does the cleanup function run?
  Following the block of code to be executed when useEffect is called.

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
