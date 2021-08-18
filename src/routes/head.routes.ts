import { Router } from 'express';

import { listHeadController } from '../modules/head/useCases/listHead';
import { moveHeadController } from '../modules/head/useCases/moveHead';

const headRoutes = Router();

headRoutes.post('/', (request, response) => {
  return moveHeadController.handle(request, response);
});

headRoutes.get('/', (request, response) => {
  return listHeadController.handle(request, response);
});

export { headRoutes };
