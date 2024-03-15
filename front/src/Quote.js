import React, { useState, useEffect } from 'react';

function Quote({ refreshKey }) {  // Remplacez key par refreshKey
  const [quote, setQuote] = useState('Chargement de la citation...');

  useEffect(() => {
    // Assurez-vous que cette URL correspond à votre configuration de backend
    fetch('http://localhost:3001/api/inspiring-quote')
      .then(response => response.json())
      .then(data => {
        if (data && data.length) {
          setQuote(`"${data[0].q}" — ${data[0].a}`);
        }
      })
      .catch(error => {
        setQuote('Impossible de charger la citation.');
        console.error('Erreur lors de la récupération de la citation:', error);
      });
  }, [refreshKey]); // Utilisez refreshKey comme dépendance

  return (
    <div className="quote">
      <p>{quote}</p>
    </div>
  );
}

export default Quote;










