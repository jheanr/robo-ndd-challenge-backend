import { ArmsRepository } from '../../repositories/implementations/ArmsRepository';
import { ListByArmController } from './ListByArmController';
import { ListByArmUseCase } from './ListByArmUseCase';

const armsRepository = ArmsRepository.getInstance();
const listByArmUseCase = new ListByArmUseCase(armsRepository);
const listByArmController = new ListByArmController(listByArmUseCase);

export { listByArmController };
