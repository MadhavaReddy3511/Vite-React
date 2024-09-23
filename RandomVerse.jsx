// src/RandomVerse.jsx
import React, { useState } from 'react';
import axios from 'axios';

const RandomVerse = () => {
  const [verse, setVerse] = useState('');

  const fetchRandomVerse = async () => {
    try {
      const response = await axios.get(
        'https://labs.bible.org/api/?passage=random&type=json'
      );
      const data = response.data[0];
      setVerse(`${data.bookname} ${data.chapter}:${data.verse} - ${data.text}`);
    } catch (error) {
      console.error('Error fetching the random verse:', error);
    }
  };

  return (
    <div className="verse-container">
      <h2>Random Bible Verse</h2>
      <p>{verse || 'Click the button to get a random verse.'}</p>
      <button onClick={fetchRandomVerse}>Get Random Verse</button>
    </div>
  );
};

export default RandomVerse;