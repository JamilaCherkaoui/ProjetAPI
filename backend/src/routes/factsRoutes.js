// src/routes/factsRoutes.js
import express from 'express';
import fetch from 'node-fetch';

const router = express.Router();


router.get('/interesting-fact', async (req, res) => {
  try {
    const response = await fetch('http://numbersapi.com/random/trivia');
    const text = await response.text(); // Numbers API returns plain text
    res.send(text);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la récupération du fait', error: error.message });
  }
});

export default router;
