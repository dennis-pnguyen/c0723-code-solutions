export default function Indicator({ count, current, onSelect }) {
  const buttons = [];
  for (let i = 0; i < count; i++) {
    buttons.push(
      <button
        key={i}
        onClick={() => onSelect(i)}
        style={{ backgroundColor: current === i ? 'lightblue' : undefined }}>
        {i}
      </button>
    );
  }
  return <div>{buttons}</div>;
}
