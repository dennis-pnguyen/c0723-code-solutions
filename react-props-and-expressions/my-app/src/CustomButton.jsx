import './CustomButton.css';

export default function CustomButton({ text, color }) {
  return <button style={{ backgroundColor: color }}>{text}</button>;
}
