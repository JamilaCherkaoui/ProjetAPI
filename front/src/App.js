import React, { useState } from 'react';
import './App.css';
import Quote from './Quote';
import MoonPhase from './MoonPhase';
import Button from './Button';
import telescopeImage from './telescope.png'; // Assurez-vous que le chemin est correct

function App() {
  const [refreshKey, setRefreshKey] = useState(0);

  const refreshQuote = () => {
    setRefreshKey(prevKey => prevKey + 1);
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>Conseils Quotidiens</h1>
      </header>
      <main className="content">
        <div className="telescope-container">
          <img src={telescopeImage} alt="Telescope" className="telescope-animation" />
        </div>
        <section className="advice-section">
          <Quote refreshKey={refreshKey} />
          <Button text="Nouvelle Citation" onClick={refreshQuote} />
        </section>
        <section className="moon-phase-section">
          <MoonPhase />
        </section>
      </main>
    </div>
  );
}

export default App;








