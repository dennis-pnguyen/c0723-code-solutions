import { FaBars } from 'react-icons/fa';
import './AppDrawer.css';
import { useState } from 'react';

export default function AppDrawer({ header, tabs, onSelect }) {
  const [isOpen, setIsOpen] = useState(false);

  function openDrawer() {
    setIsOpen(!isOpen);
  }

  function displayTab(tab) {
    openDrawer();
    onSelect(tab);
  }

  return (
    <>
      <FaBars onClick={openDrawer} className="menu-icon" />
      <Backdrop isOpen={isOpen} onClick={openDrawer} />
      <Menu isOpen={isOpen}>
        <h3 className="menu-heading">{header}</h3>
        <ul className="menu-items">
          {tabs.map((tab) => (
            <li key={tab} className="menu-item" onClick={() => displayTab(tab)}>
              {tab}
            </li>
          ))}
        </ul>
      </Menu>
    </>
  );
}

function Menu({ children, isOpen }) {
  const className = isOpen ? 'menu-drawer is-open' : 'menu-drawer';
  return <div className={className}>{children}</div>;
}

function Backdrop({ isOpen, onClick }) {
  const className = isOpen ? 'menu-shade is-drawn' : 'menu-shade';
  return <div className={className} onClick={onClick} />;
}
