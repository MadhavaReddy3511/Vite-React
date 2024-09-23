import React from 'react';
import RandomVerse from './RandomVerse';
import SpecificVerse from './SpecificVerse';
import './index.css';

const App = () => {
  return (
    <div className="app">
      <h1>Bible Verse App</h1>
      <div className="verse-sections">
        <RandomVerse />
        <SpecificVerse />
      </div>
    </div>
  );
};

export default App;