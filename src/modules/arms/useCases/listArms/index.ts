import { ArmsRepository } from '../../repositories/implementations/ArmsRepository';
import { ListArmsController } from './ListArmsController';
import { ListArmsUseCase } from './ListArmsUseCase';

const armsRepository = ArmsRepository.getInstance();
const listArmsUseCase = new ListArmsUseCase(armsRepository);
const listArmsController = new ListArmsController(listArmsUseCase);

export { listArmsController };
