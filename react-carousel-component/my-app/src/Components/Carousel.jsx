import Banner from './Banner';
import PrevButton from './PrevButton';
import Indicators from './Indicators';
import NextButton from './NextButton';
import { useState, useEffect, useCallback } from 'react';
import '../Carousel.css';

export default function Carousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleNext = useCallback(() => {
    setCurrentIndex((currentIndex + 1) % images.length);
  }, [currentIndex, images]);
  useEffect(() => {
    const timeoutId = setTimeout(handleNext, 3000);
    return () => clearTimeout(timeoutId);
  }, [handleNext]);

  function handlePrev() {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  }

  return (
    <div className="carousel">
      <PrevButton onPrevClick={handlePrev} />
      <Banner image={images[currentIndex]} />
      <NextButton onNextClick={handleNext} />
      <Indicators
        count={images.length}
        current={currentIndex}
        onSelect={(i) => setCurrentIndex(i)}
      />
    </div>
  );
}
