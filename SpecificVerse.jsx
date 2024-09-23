import React, { useState } from 'react';
import axios from 'axios';

const SpecificVerse = () => {
  const [verse, setVerse] = useState('');
  const [reference, setReference] = useState('John 3:16');

  const fetchSpecificVerse = async () => {
    try {
      const [book, chapterVerse] = reference.split(' ');
      const [chapter, verseNumber] = chapterVerse.split(':');

      const response = await axios.get(
        `https://labs.bible.org/api/?passage=${book}%20${chapter}:${verseNumber}&type=json`
      );
      const data = response.data[0];
      setVerse(`${data.bookname} ${data.chapter}:${data.verse} - ${data.text}`);
    } catch (error) {
      console.error('Error fetching the specific verse:', error);
    }
  };

  return (
    <div className="verse-container">
      <h2>Get a Specific Verse</h2>
      <input
        type="text"
        value={reference}
        onChange={(e) => setReference(e.target.value)}
        placeholder="e.g., John 3:16"
      />
      <button onClick={fetchSpecificVerse}>Get Verse</button>
      <p>{verse}</p>
    </div>
  );
};

export default SpecificVerse;