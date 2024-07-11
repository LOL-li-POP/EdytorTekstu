import React from 'react';
import AlignCenter from './AlignCenter';
import AlignLeft from './AlignLeft';
import AlignRight from './AlignRight';
import AlignJustify from './AlignJustify';

function TextButtons({ onCenterAlignClick, onLeftAlignClick, onRightAlignClick, onJustifyAlignClick }) {
  return (
    <>
      <AlignCenter onCenterAlignClick={onCenterAlignClick} />
      <AlignLeft onLeftAlignClick={onLeftAlignClick} />
      <AlignRight onRightAlignClick={onRightAlignClick} />
      <AlignJustify onJustifyAlignClick={onJustifyAlignClick} />
    </>
  );
}

export default TextButtons;
