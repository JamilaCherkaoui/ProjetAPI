// moonPhasesRoutes.js
import express from 'express';
import fetch from 'node-fetch';

const router = express.Router();

/**
 * @swagger
 * /api/moon-phase:
 *   get:
 *     summary: Récupère les données de la phase de la lune pour une date donnée
 *     description: Utilise l'API FarmSense pour fournir les données de la phase de la lune pour une date spécifique.
 *     parameters:
 *       - in: query
 *         name: d
 *         schema:
 *           type: integer
 *         required: false
 *         description: Timestamp Unix de la date pour laquelle obtenir les données de la phase de la lune. Si non spécifié, utilise une valeur par défaut.
 *     responses:
 *       200:
 *         description: Données de la phase de la lune pour la date demandée.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 Phase:
 *                   type: string
 *                 AgeOfMoon:
 *                   type: string
 *       404:
 *         description: Aucune donnée sur la phase de la lune trouvée pour la date spécifiée.
 *       500:
 *         description: Erreur serveur lors de la récupération des données.
 */
router.get('/', async (req, res) => {
  const timestamp = req.query.d || Math.floor(Date.now() / 1000); // Utilise le timestamp fourni ou le timestamp actuel si non spécifié
  try {
    const response = await fetch(`http://api.farmsense.net/v1/moonphases/?d=${timestamp}`);
    const data = await response.json();
    if (data && data.length > 0) {
      res.status(200).json(data[0]);
    } else {
      res.status(404).json({ message: 'Aucune donnée sur la phase de la lune trouvée.' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la récupération des données de la phase de la lune', error: error.message });
  }
});

export default router;


// 1710463024
// 1672444800
//la pagination n'est pas utile ici  
//car on a pas un grand nombre d'éléments à 
//retourner et qu'on ne souhaite les diviser en plusieurs "pages" de résultats pour faciliter la navigation et l'affichage. 
