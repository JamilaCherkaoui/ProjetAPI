import express from 'express';

const router = express.Router();

// Route principale
router.get('/', (req, res) => {
  res.send('Bienvenue sur l\'API principale.');
});

export default router;

