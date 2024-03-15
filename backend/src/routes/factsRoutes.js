// src/routes/factsRoutes.js
import express from 'express';
import fetch from 'node-fetch';

const router = express.Router();

/**
 * @swagger
 * /api/interesting-fact:
 *   get:
 *     summary: Récupère un fait intéressant aléatoire.
 *     description: Fournit un fait aléatoire intéressant en utilisant l'API Numbers.
 *     responses:
 *       200:
 *         description: Un fait intéressant sous forme de texte.
 *         content:
 *           text/plain:
 *             schema:
 *               type: string
 *               example: "5 is the number of Platonic solids."
 *       500:
 *         description: Erreur lors de la récupération du fait.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Erreur lors de la récupération du fait"
 *                 error:
 *                   type: string
 *                   example: "Erreur détaillée"
 */
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
