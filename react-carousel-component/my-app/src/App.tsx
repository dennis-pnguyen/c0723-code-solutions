import './App.css';
import Carousel from './Components/Carousel';
const images = [
  '/images/001.png',
  '/images/004.png',
  '/images/007.png',
  '/images/025.png',
  '/images/039.png',
];
function App() {
  return (
    <>
      <Carousel images={images} />
    </>
  );
}

export default App;
