import { Router } from 'express';

import { ListHeadController } from '@modules/head/useCases/listHead/ListHeadController';
import { MoveHeadController } from '@modules/head/useCases/moveHead/MoveHeadController';

const headRoutes = Router();

const moveHeadController = new MoveHeadController();
const listHeadController = new ListHeadController();

headRoutes.patch('/', moveHeadController.handle);
headRoutes.get('/', listHeadController.handle);

export { headRoutes };
