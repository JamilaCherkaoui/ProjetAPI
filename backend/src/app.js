// src/app.js
import express from 'express';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express'; // Importez swagger-ui-express
import swaggerJSDoc from 'swagger-jsdoc'; // Importez swagger-jsdoc
import indexRouter from './routes/index.js';
import quotesRouter from './routes/quotesRoutes.js';
import factsRouter from './routes/factsRoutes.js';
import moonPhasesRouter from './routes/moonPhasesRoutes.js';

const app = express();
const port = process.env.PORT || 3001;

// Options de configuration pour Swagger
const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'Mon API',
      version: '1.0.0',
      description: 'Documentation de mon API',
    },
  },
  // Emplacement des fichiers pour la documentation Swagger
  apis: ['./src/routes/*.js'], // Assurez-vous que ce chemin correspond à l'emplacement de vos fichiers de route
};

const swaggerDocs = swaggerJSDoc(swaggerOptions);

// Activation de CORS
app.use(cors());

// Pour le parsing des requêtes JSON
app.use(express.json());

// Routes
app.use('/', indexRouter);
app.use('/api', quotesRouter);
app.use('/api', factsRouter);
app.use('/api/moon-phase', moonPhasesRouter);

// Route pour la documentation Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Démarrage du serveur
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
