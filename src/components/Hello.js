import React, { useState } from 'react';


const Hello = () => {
  const [mode, setMode] = useState('DarkMode');
  const changeMode = () => {
    const NewMode = mode === 'DarkMode' ? 'LightMode' : 'DarkMode';
    setMode(NewMode);
  }

  return (
    <div>
      <h1>State</h1>
      <h2>{mode}</h2>
      <button onClick={changeMode}>Change</button>
    </div>
  );
};

export default Hello;