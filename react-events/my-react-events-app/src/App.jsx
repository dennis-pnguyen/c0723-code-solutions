import './App.css';
import CustomButton from './CustomButton';

function App() {
  function handleCustomClick(text) {
    alert('Clicked on ' + `${text}`);
  }

  return (
    <>
      <CustomButton
        onCustomClick={handleCustomClick}
        text="fancy"
        color="red"
      />
      <CustomButton
        onCustomClick={handleCustomClick}
        text="sky"
        color="lightblue"
      />
      <CustomButton
        onCustomClick={handleCustomClick}
        text="Barney"
        color="purple"
      />
    </>
  );
}

export default App;
