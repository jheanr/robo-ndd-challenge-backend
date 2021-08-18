import { Router } from 'express';

import { ListArmsController } from '@modules/arms/useCases/listArms/ListArmsController';
import { ListByArmController } from '@modules/arms/useCases/listByArm/ListByArmController';
import { MoveArmController } from '@modules/arms/useCases/moveArm/MoveArmController';

const armsRoutes = Router();

const listArmsController = new ListArmsController();
const listByArmController = new ListByArmController();
const moveArmController = new MoveArmController();

armsRoutes.patch('/', moveArmController.handle);
armsRoutes.get('/:arm', listByArmController.handle);
armsRoutes.get('/', listArmsController.handle);

export { armsRoutes };
