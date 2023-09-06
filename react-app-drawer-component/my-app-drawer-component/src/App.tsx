import { useState } from 'react';
import './App.css';
import AppDrawer from './AppDrawer';
const header = ['Menu'];
const tabs = ['About', 'Get Started', 'Sign In'];

function App() {
  const [tab, setTab] = useState('No menu selected');
  return (
    <>
      <AppDrawer header={header} tabs={tabs} onSelect={(tab) => setTab(tab)} />
      <h1>{tab}</h1>
    </>
  );
}

export default App;
