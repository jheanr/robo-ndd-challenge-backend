import 'reflect-metadata';

import cors from 'cors';
import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors';
import swaggerUi from 'swagger-ui-express';

import { AppError } from '@shared/errors/AppError';
import swaggerConfig from '@utils/swagger.json';

import { routes } from './routes';
import './shared/container';

const app = express();

app.use(express.json());
app.use(express.static('uploads'));
app.use(cors());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerConfig));
app.use(routes);
app.use(
  (error: Error, request: Request, response: Response, next: NextFunction) => {
    if (error instanceof AppError) {
      return response.status(error.statusCode).json({
        status: 'error',
        message: error.message,
      });
    }

    return response.status(500).json({
      status: 'error',
      message: 'Internal server error.',
    });
  },
);

export { app };
