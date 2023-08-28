export default function Button({ text, onCustomClick }) {
  return <button onClick={() => onCustomClick()}>{text}</button>;
}
