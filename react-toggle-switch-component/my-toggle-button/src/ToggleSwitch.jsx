import { useState } from 'react';
import './ToggleSwitch.css';

export default function ToggleSwitch() {
  const [toggled, setToggle] = useState(true);
  let label;

  if (toggled) {
    label = 'ON';
  } else {
    label = 'OFF';
  }

  return (
    <label>
      <input
        type="checkbox"
        defaultChecked={toggled}
        onClick={() => setToggle(!toggled)}></input>
      <span />
      <p>{label}</p>
    </label>
  );
}
