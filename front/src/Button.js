// Dans votre fichier App.js ou Button.js

import React from 'react';
import './Button.css'; 
const Button = ({ text, onClick }) => {
  return (
    <button className="button" onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
