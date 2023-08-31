import Banner from './Banner';
import NextButton from './NextButton';
import PrevButton from './PrevButton';
import Indicator from './Indicators';
import { useState } from 'react';

export default function RotatingBanner({ items }) {
  const [currentIndex /*setCurrentIndex*/] = useState(0);

  return (
    <>
      <Banner items={items[currentIndex]} />
      <PrevButton />
      <div />
      <Indicator count={items.length} current={currentIndex} />
      <div />
      <NextButton />
    </>
  );
}
