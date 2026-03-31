import React, { useState, useEffect } from 'react';
import '../assets/Quote.css';

const Quote = () => {
  const [quote, setQuote] = useState('Loading...');

  const fetchQuote = async () => {
    try {
      const response = await fetch('https://api.api-ninjas.com/v1/quotes', {
        method: 'GET',
        headers: {
          'X-Api-Key': 'DHCq65OoWXOdqnErgC6sF8ba9p7P4jiV04kv1JhN',
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
