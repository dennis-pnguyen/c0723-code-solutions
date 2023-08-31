import Banner from './Banner';
import NextButton from './NextButton';
import PrevButton from './PrevButton';
import Indicator from './Indicators';

export default function RotatingBanner({ items }) {
  return (
    <>
      <Banner items={items[0]} />
      <PrevButton />
      <div />
      <Indicator />
      <div />
      <NextButton />
    </>
  );
}
