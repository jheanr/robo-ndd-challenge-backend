import { inject, injectable } from 'tsyringe';

import { Head } from '../../models/Head';
import { IHeadRepository } from '../../repositories/IHeadRepository';

@injectable()
class ListHeadUseCase {
  constructor(
    @inject('HeadRepository')
    private headRepository: IHeadRepository,
  ) {}

  execute(): Head {
    const result = this.headRepository.list();

    return result;
  }
}

export { ListHeadUseCase };
