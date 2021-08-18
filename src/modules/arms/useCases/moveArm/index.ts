import { ArmsRepository } from '../../repositories/implementations/ArmsRepository';
import { MoveArmController } from './MoveArmController';
import { MoveArmUseCase } from './MoveArmUseCase';

const armsRepository = ArmsRepository.getInstance();
const moveArmUseCase = new MoveArmUseCase(armsRepository);
const moveArmController = new MoveArmController(moveArmUseCase);

export { moveArmController };
