import { Head } from '../../models/Head';
import { IHeadRepository } from '../../repositories/IHeadRepository';

class ListHeadUseCase {
  constructor(private headRepository: IHeadRepository) {}

  execute(): Head {
    const head = this.headRepository.list();

    return head;
  }
}

export { ListHeadUseCase };
