import { HeadRepository } from '../../repositories/implementations/HeadRepository';
import { ListHeadController } from './ListHeadController';
import { ListHeadUseCase } from './ListHeadUseCase';

const headRepository = HeadRepository.getInstance();
const lisHeadUseCase = new ListHeadUseCase(headRepository);
const listHeadController = new ListHeadController(lisHeadUseCase);

export { listHeadController };
