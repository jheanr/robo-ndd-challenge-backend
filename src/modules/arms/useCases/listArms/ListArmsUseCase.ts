import { inject, injectable } from 'tsyringe';

import { Arms } from '@modules/arms/models/Arms';
import { IArmsRepository } from '@modules/arms/repositories/IArmsRepository';

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
