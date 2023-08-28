import { useState } from 'react';
import './HotButton.css';

export default function HotButton() {
  const [count, setCount] = useState(0);
  let color;

  if (count < 3) {
    color = '';
  } else if (count < 6) {
    color = 'cold';
  } else if (count < 9) {
    color = 'warm';
  } else if (count < 12) {
    color = 'warmer';
  } else if (count < 15) {
    color = 'warmest';
  } else if (count < 18) {
    color = 'hot';
  } else {
    color = 'nuclear';
  }

  return (
    <>
      <button onClick={() => setCount(count + 1)} className={color}>
        Hot Button
      </button>
      <p>{count}</p>
    </>
  );
}
