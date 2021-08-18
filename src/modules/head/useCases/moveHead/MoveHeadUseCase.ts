import { inject, injectable } from 'tsyringe';

import { AppError } from '../../../../shared/errors/AppError';
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
      throw new AppError('Invalid head movement.');
    }

    if (action === 'rotation' && !this.headRepository.canRotate()) {
      throw new AppError(
        `You can't rotate the head while its inclined this way.`,
      );
    }

    this.headRepository.move({ action, movement });
  }
}

export { MoveHeadUseCase };
