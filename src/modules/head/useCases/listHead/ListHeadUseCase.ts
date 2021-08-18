import { inject, injectable } from 'tsyringe';

import { Head } from '@modules/head/models/Head';
import { IHeadRepository } from '@modules/head/repositories/IHeadRepository';

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
