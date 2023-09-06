import Banner from './Banner';
import NextButton from './NextButton';
import PrevButton from './PrevButton';
import Indicator from './Indicators';
import { useState } from 'react';

export default function RotatingBanner({ items }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <>
      <Banner item={items[currentIndex]} />
      <PrevButton
        prevClick={() =>
          setCurrentIndex((currentIndex - 1 + items.length) % items.length)
        }
      />
      <div />
      <Indicator
        count={items.length}
        current={currentIndex}
        onSelect={(i) => setCurrentIndex(i)}
      />
      <div />
      <NextButton
        nextClick={() => setCurrentIndex((currentIndex + 1) % items.length)}
      />
    </>
  );
}
