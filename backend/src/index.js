import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';

import infoRoutes from './routes/info.js';
import exampleRoutes from './routes/examples.js';
import computeRoutes from './routes/compute.js';
import { notFound, errorHandler } from './middleware/error.js';

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// Rutas API
app.use('/api/info', infoRoutes);
app.use('/api/examples', exampleRoutes);
app.use('/api/compute', computeRoutes);

// Static (para servir build del frontend en prod)
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
app.use(express.static(join(__dirname, '../../frontend/dist')));

app.use('*', (req, res, next) => {
  // Entrega index.html del FE en rutas desconocidas (SPA)
  res.sendFile(join(__dirname, '../../frontend/dist/index.html'));
});

// Middlewares de errores
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 4001;
app.listen(PORT, () => console.log(`Backend escuchando en http://localhost:${PORT}`));
