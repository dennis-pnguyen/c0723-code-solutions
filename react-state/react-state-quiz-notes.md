# react-state-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are _hooks_ in React?
  Special functions in React that are only available while React is rendering
- What are the "Rules of Hooks"? (if necessary, re-read the "Pitfall" box in [State](https://react.dev/learn/state-a-components-memory))
  Hooks must be called at the top level of your components or your own hooks
- What is the purpose of state in React?
  to help components maintain their specific memory in order to change whats on screen for us so components will need to remember things
- Why can't we just maintain state in a local variable?
  React wont know otherwise. useState ensures that React is aware of state changes and re-renders for us accordingly
- What two actions happen when you call a `state setter` function?
  Our component function is called twice
- When does the local `state variable` get updated with the new value?
  following the second render

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
