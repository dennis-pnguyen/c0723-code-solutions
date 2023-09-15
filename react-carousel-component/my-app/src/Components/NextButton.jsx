import { FaChevronRight } from 'react-icons/fa';

export default function NextButton({ onNextClick }) {
  return <FaChevronRight onClick={onNextClick} className="next-image" />;
}
