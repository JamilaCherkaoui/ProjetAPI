// src/routes/quotesRoutes.js
import express from 'express';
import fetch from 'node-fetch';

const router = express.Router();

/**
 * @swagger
 * /api/inspiring-quote:
 *   get:
 *     summary: Récupère une citation inspirante aléatoire
 *     description: Fournit une citation inspirante aléatoire à partir de l'API ZenQuotes.
 *     responses:
 *       200:
 *         description: Une citation inspirante.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 q:
 *                   type: string
 *                   description: La citation.
 *                 a:
 *                   type: string
 *                   description: L'auteur de la citation.
 *               example:
 *                 q: "Life isn’t about getting and having, it’s about giving and being."
 *                 a: "Kevin Kruse"
 *       500:
 *         description: Erreur lors de la récupération de la citation.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Erreur lors de la récupération de la citation"
 *                 error:
 *                   type: string
 *                   example: "Détails de l'erreur"
 */
router.get('/inspiring-quote', async (req, res) => {
  try {
    const response = await fetch('https://zenquotes.io/api/random');
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la récupération de la citation', error: error.message });
  }
});

export default router;
