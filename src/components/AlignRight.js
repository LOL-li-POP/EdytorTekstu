import React from 'react';

function AlignRight({ onRightAlignClick }) {
  const handleRightAlignClick = () => {
    onRightAlignClick();
  };

  return (
    <button onClick={handleRightAlignClick}>Tekst do prawej</button>
  );
}

export default AlignRight;
