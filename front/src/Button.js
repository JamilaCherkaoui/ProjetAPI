// Dans votre fichier App.js ou Button.js

import React from 'react';
import './Button.css'; // Assurez-vous que le chemin vers votre fichier CSS est correct

const Button = ({ text, onClick }) => {
  return (
    <button className="button" onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
