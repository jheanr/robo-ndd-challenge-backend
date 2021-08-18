import { Router } from 'express';

import { listArmsController } from '../modules/arms/useCases/listArms';
import { listByArmController } from '../modules/arms/useCases/listByArm';
import { moveArmController } from '../modules/arms/useCases/moveArm';

const armsRoutes = Router();

armsRoutes.post('/', (request, response) => {
  return moveArmController.handle(request, response);
});

armsRoutes.get('/:arm', (request, response) => {
  return listByArmController.handle(request, response);
});

armsRoutes.get('/', (request, response) => {
  return listArmsController.handle(request, response);
});

export { armsRoutes };
