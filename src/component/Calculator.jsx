import React, { useState, useEffect } from 'react';
import { evaluate } from 'mathjs';


const Calculator = () => {
  const [display, setDisplay] = useState(() => {
    const savedDisplay = localStorage.getItem('display');
    return savedDisplay || '0';
  });

  useEffect(() => {
    localStorage.setItem('display', display);
  }, [display]);

  const handleClick = (value) => {
    if (display === '0') {
      setDisplay(value);
    } else {
      setDisplay(display + value);
    }
  };

  const handleClear = () => {
    if (display === '0') return;

    if (display.length === 1) {
      setDisplay('0');
    } else {
      setDisplay(display.slice(0, -1));
    }
  };

  const toggleSign = () => {
    if (display === '0') return;

    if (display.startsWith('-')) {
      setDisplay(display.slice(1));
    } else {
      setDisplay(`-${display}`);
    }
  };

  const handlePercent = () => {
    try {
      const result = String(parseFloat(display) / 100);
      setDisplay(result);
    } catch {
      setDisplay('Error');
    }
  };

  const calculateResult = () => {
    try {
      const result = evaluate(display);
      setDisplay(String(result));
    } catch {
      setDisplay('Error');
    }
  };

  return (
    <div className="body">
      <div className="calculator">

        <div className="display">{display}</div>

        <div className="grid">
          <button type="button" onClick={handleClear}>AC</button>
          <button type="button" onClick={toggleSign}>+/-</button>
          <button type="button" onClick={handlePercent}>%</button>
          <button type="button" className="right" onClick={() => handleClick('/')}>/</button>

          <button type="button" onClick={() => handleClick('7')}>7</button>
          <button type="button" onClick={() => handleClick('8')}>8</button>
          <button type="button" onClick={() => handleClick('9')}>9</button>
          <button type="button" className="right" onClick={() => handleClick('*')}>×</button>

          <button type="button" onClick={() => handleClick('4')}>4</button>
          <button type="button" onClick={() => handleClick('5')}>5</button>
          <button type="button" onClick={() => handleClick('6')}>6</button>
          <button type="button" className="right" onClick={() => handleClick('-')}>-</button>

          <button type="button" onClick={() => handleClick('1')}>1</button>
          <button type="button" onClick={() => handleClick('2')}>2</button>
          <button type="button" onClick={() => handleClick('3')}>3</button>
          <button type="button" className="right" onClick={() => handleClick('+')}>+</button>

          <button type="button" className="zero" onClick={() => handleClick('0')}>0</button>

          <button type="button" onClick={() => handleClick('.')}>.</button>

          <button type="button" className="right" onClick={calculateResult}>=</button>
        </div>

      </div>
    </div>
  );
};

export default Calculator;
