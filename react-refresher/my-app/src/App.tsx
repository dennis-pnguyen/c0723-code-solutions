import { useState } from 'react';
import './App.css';
import Button from './Button.jsx';

function App() {
  const [count, setCount] = useState(0);

  function handleIncrement() {
    setCount(count + 1);
  }

  function handleDecrement() {
    setCount(count - 1);
  }
  return (
    <>
      <Button onCustomClick={handleDecrement} text="Down" />
      {count}
      <Button onCustomClick={handleIncrement} text="Up" />
    </>
  );
}

export default App;
