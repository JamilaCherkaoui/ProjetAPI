// MoonPhase.js
import React, { useState, useEffect } from 'react';
import moonImage from './moon.png';

function MoonPhase() {
    const [moonData, setMoonData] = useState({ phase: 'Chargement...', illumination: 0 });

    useEffect(() => {
        const fetchMoonPhaseData = () => {
            fetch('http://localhost:3001/api/moon-phase') // Assurez-vous que cette URL est correcte
                .then(response => response.json())
                .then(data => {
                    setMoonData({
                        phase: data.Phase,
                        illumination: data.Illumination * 100
                    });
                })
                .catch(error => {
                    console.error('Erreur lors de la récupération des données lunaires:', error);
                    setMoonData({ phase: 'Erreur', illumination: 0 });
                });
        };

        fetchMoonPhaseData(); // Exécuter immédiatement lors du montage du composant
        const intervalId = setInterval(fetchMoonPhaseData, 3600000); // Rafraîchir toutes les heures

        return () => clearInterval(intervalId); // Nettoyer l'intervalle lors du démontage du composant
    }, []);

    return (
        <div className="moon-container">
            <img src={moonImage} className="moon-rotation" alt="Moon" />
            <div className="moon-info">
                <p>Phase: {moonData.phase}</p>
                <p>Illumination: {moonData.illumination.toFixed(2)}%</p>
            </div>
        </div>
    );
}

export default MoonPhase;










