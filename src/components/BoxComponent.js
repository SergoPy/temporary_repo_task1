import React from 'react';

const BoxComponent = ({ countA, countB }) => {
  return (
    <div>
      <h3>All numbers:</h3>
      <p>Count A from BoxComponent: {countA}</p>
      <p>Count B from BoxComponent: {countB}</p>
    </div>
  );
};

export default React.memo(BoxComponent);
