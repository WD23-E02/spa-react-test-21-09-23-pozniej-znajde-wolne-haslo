import React, { useState } from 'react';
import './style.css';

function App() {
  const [transformationPoints, setTransformationPoints] = useState(300);

  const clickHandler = () => {
    if (transformationPoints === 0) return;
    setTransformationPoints((prev) => prev - 50);
  };

  return (
    <div className='App'>
      <h1>Move the Box Up!</h1>

      <button onClick={clickHandler}>Move Up</button>

      <div
        className='box'
        style={{ transform: `translateY(${transformationPoints}px)` }}
      ></div>
    </div>
  );
}

export default App;
