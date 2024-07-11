import React from 'react';

function AlignCenter({ onCenterAlignClick }) {
  const handleCenterAlignClick = () => {
    onCenterAlignClick();
  };

  return (
    <button onClick={handleCenterAlignClick}>Wyśrodkuj tekst</button>
  );
}

export default AlignCenter;
