// src/routes/index.js
import express from 'express';

const router = express.Router();

/**
 * @swagger
 * /:
 *   get:
 *     summary: Page d'accueil de l'API
 *     description: Affiche un message de bienvenue indiquant que l'utilisateur est sur la page d'accueil de l'API.
 *     responses:
 *       200:
 *         description: Un message de bienvenue.
 *         content:
 *           text/plain:
 *             schema:
 *               type: string
 *               example: "Bienvenue sur l'API principale."
 */
router.get('/', (req, res) => {
  res.send('Bienvenue sur l\'API principale.');
});

export default router;
