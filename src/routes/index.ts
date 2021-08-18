import { Router } from 'express';

import { armsRoutes } from './arms.routes';
import { headRoutes } from './head.routes';

const routes = Router();

routes.use('/head', headRoutes);
routes.use('/arms', armsRoutes);

export { routes };
