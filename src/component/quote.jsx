import React, { useState, useEffect } from 'react';

import ApiKey from '../env.js';

const Quote = () => {
  const [quote, setQuote] = useState('Loading...');

  const fetchQuote = async () => {
    try {
      const response = await fetch('https://api.api-ninjas.com/v1/quotes', {
        method: 'GET',
        headers: {
          'X-Api-Key': ApiKey,
        },
      });

      const data = await response.json();

      setQuote(`${data[0].quote} — ${data[0].author}`);
    } catch (error) {
      setQuote('Failed to load quote');
    }
  };

  useEffect(() => {
    fetchQuote(); 

    const quoteInterval = setInterval(() => {
      fetchQuote(); 
    }, 10000); // 

    return () => clearInterval(quoteInterval); 
  }, []);

  return (
    <div className="quote">
      <h2>Quote of the Day</h2>

      <p>{quote}</p>

      <button type="button" onClick={fetchQuote}>
        New Quote
      </button>
    </div>
  );
};

export default Quote;