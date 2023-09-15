import { FaChevronLeft } from 'react-icons/fa';

export default function PrevButton({ onPrevClick }) {
  return <FaChevronLeft onClick={onPrevClick} className="previous-image" />;
}
