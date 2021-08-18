import { HeadRepository } from '../../repositories/implementations/HeadRepository';
import { MoveHeadController } from './MoveHeadController';
import { MoveHeadUseCase } from './MoveHeadUseCase';

const headRepository = HeadRepository.getInstance();
const moveHeadUseCase = new MoveHeadUseCase(headRepository);
const moveHeadController = new MoveHeadController(moveHeadUseCase);

export { moveHeadController };
