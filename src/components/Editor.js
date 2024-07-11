import React, { useState } from 'react';
import SaveButton from './SaveButton';
import LoadButton from './LoadButton';
import TextButtons from './TextButtons';
import SaveButtonDocx from './SaveButtonDocx';

function Editor() {
  const [text, setText] = useState('');
  const [styl, setStyl] = useState({});
  const [color, setKolor] = useState('');
  const [alignment, setAlignment] = useState('left');
  const handleColorChange = (e) =>
  {
    setKolor(e.target.value);
  };
  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleFileLoad = (fileText) => {
    setText(fileText);
  };

  const handleCenterAlignClick = () => {
    setAlignment('center');
  };

  const handleLeftAlignClick = () => {
    setAlignment('left');
  };

  const handleRightAlignClick = () => {
    setAlignment('right');
  };

  const handleJustifyAlignClick = () => {
    setAlignment('justify');
  };

  return (
    <>
      <textarea
        value={text}
        onChange={handleTextChange}
        rows="10"
        cols="40"
        style={{textAlign: alignment, color: color }}
      ></textarea>
      <br />
      <LoadButton onFileLoad={handleFileLoad} />
      <br />
      <SaveButton text={text}/>
      <TextButtons onCenterAlignClick={handleCenterAlignClick} onLeftAlignClick={handleLeftAlignClick} onRightAlignClick={handleRightAlignClick} onJustifyAlignClick={handleJustifyAlignClick} />
      <input type="color" onChange={handleColorChange}></input>
      <SaveButtonDocx text={text} alignment={alignment} color={color}/>
    </>
  );
}

export default Editor;
