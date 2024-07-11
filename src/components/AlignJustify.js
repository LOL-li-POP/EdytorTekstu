import React from 'react';

function AlignJustify({ onJustifyAlignClick }) {
  const handleJustifyAlignClick = () => {
    onJustifyAlignClick();
  };

  return (
    <button onClick={handleJustifyAlignClick}>Wyjustuj tekst</button>
  );
}

export default AlignJustify;
