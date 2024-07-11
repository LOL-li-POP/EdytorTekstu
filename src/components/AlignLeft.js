import React from 'react';

function AlignLeft({ onLeftAlignClick }) {
  const handleLeftAlignClick = () => {
    onLeftAlignClick();
  };

  return (
    <button onClick={handleLeftAlignClick}>Tekst do lewej</button>
  );
}

export default AlignLeft;
