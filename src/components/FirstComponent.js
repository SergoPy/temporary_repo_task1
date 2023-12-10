import React, { useState } from 'react';
import SecondComponent from './SecondComponent';

const FirstComponent = () => {
  const [countA, setCountA] = useState(0);

  const incrementCountA = () => {
    setCountA(countA + 1);
  };

  return (
    <div>
      <h1>First Number A</h1>
      <p>Count A: {countA}</p>
      <button onClick={incrementCountA}>Increment A</button>
      <SecondComponent countA={countA} />
    </div>
  );
};

export default FirstComponent;