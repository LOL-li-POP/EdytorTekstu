import React from 'react';

function SaveButton({ text }) {
  const handleSaveFile = () => {
    const blob = new Blob([text], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'edited.txt';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <button onClick={handleSaveFile}>Zapisz plik</button>
  );
}

export default SaveButton;
