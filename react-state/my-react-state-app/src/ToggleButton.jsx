import { useState } from 'react';

export default function ToggleButton({ text, color }) {
  const [isClicked, setClick] = useState(false);
  const buttonColor = {
    backgroundColor: 'green',
  };
  function handleClick() {
    setClick(!isClicked);
  }
  return (
    <button
      onClick={handleClick}
      style={isClicked ? buttonColor : { backgroundColor: color }}>
      {text}
    </button>
  );
}
