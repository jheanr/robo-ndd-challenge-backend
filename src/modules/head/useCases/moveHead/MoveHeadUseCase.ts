import { inject, injectable } from 'tsyringe';

import {
  IHeadRepository,
  IMoveHeadDTO,
} from '../../repositories/IHeadRepository';

type IRequest = IMoveHeadDTO;

@injectable()
class MoveHeadUseCase {
  constructor(
    @inject('HeadRepository')
    private headRepository: IHeadRepository,
  ) {}

  execute({ action, movement }: IRequest): void {
    if (!this.headRepository.isValidMovement({ action, movement })) {
      throw new Error('Invalid head movement.');
    }

    if (action === 'rotation' && !this.headRepository.canRotate()) {
      throw new Error(`You can't rotate the head while its inclined this way.`);
    }

    this.headRepository.move({ action, movement });
  }
}

export { MoveHeadUseCase };
