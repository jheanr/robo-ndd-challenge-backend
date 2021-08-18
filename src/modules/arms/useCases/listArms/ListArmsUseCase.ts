import { Arms } from '../../models/Arms';
import { IArmsRepository } from '../../repositories/IArmsRepository';

class ListArmsUseCase {
  constructor(private armsRepository: IArmsRepository) {}

  execute(): Arms {
    const arms = this.armsRepository.list();

    return arms;
  }
}

export { ListArmsUseCase };
