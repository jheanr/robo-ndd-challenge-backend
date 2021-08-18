import { inject, injectable } from 'tsyringe';

import { Arms } from '../../models/Arms';
import { IArmsRepository } from '../../repositories/IArmsRepository';

@injectable()
class ListArmsUseCase {
  constructor(
    @inject('ArmsRepository')
    private armsRepository: IArmsRepository,
  ) {}

  execute(): Arms {
    const result = this.armsRepository.list();

    return result;
  }
}

export { ListArmsUseCase };
