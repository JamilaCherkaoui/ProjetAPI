import express from 'express';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';
import indexRouter from './routes/index.js';
import quotesRouter from './routes/quotesRoutes.js';
import factsRouter from './routes/factsRoutes.js';
import moonPhasesRouter from './routes/moonPhasesRoutes.js';

const app = express();

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
  apis: ['./src/routes/*.js'], // Assurez-vous que ce chemin correspond à l'emplacement de vos fichiers de route
};

const swaggerDocs = swaggerJSDoc(swaggerOptions);

app.use(cors());
app.use(express.json());
app.use('/', indexRouter);
app.use('/api', quotesRouter);
app.use('/api', factsRouter);
app.use('/api/moon-phase', moonPhasesRouter);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

export default app;
