import { useState } from 'react';
import './ToggleSwitch.css';

export default function ToggleSwitch({ label }) {
  const [toggled, setToggle] = useState(true);

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
