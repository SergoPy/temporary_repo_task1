import React, { useState } from 'react';
import BoxComponent from './BoxComponent';

const SecondComponent = ({ countA }) => {
  const [countB, setCountB] = useState(0);

  const incrementCountB = () => {
    setCountB(countB + 1);
  };

  return (
    <div>
      <h2>Second number B</h2>
      <p>Count B: {countB}</p>
      <button onClick={incrementCountB}>Increment B</button>
      <BoxComponent countA={countA} countB={countB} />
    </div>
  );
};

export default React.memo(SecondComponent);
