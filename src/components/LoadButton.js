import React from 'react';

function LoadButton({ onFileLoad }) {
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = (event) => {
      const fileText = event.target.result;
      onFileLoad(fileText);
    };

    reader.readAsText(file);
  };

  return (
    <>
      <input type="file" accept=".txt" onChange={handleFileChange} />
    </>
  );
}

export default LoadButton;
