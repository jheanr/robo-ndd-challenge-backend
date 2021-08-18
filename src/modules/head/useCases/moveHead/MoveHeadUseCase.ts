import { inject, injectable } from 'tsyringe';

import {
  IHeadRepository,
  IMoveHeadDTO,
} from '@modules/head/repositories/IHeadRepository';
import { AppError } from '@shared/errors/AppError';

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
        `You can't rotate the head with the current inclination position.`,
      );
    }

    this.headRepository.move({ action, movement });
  }
}

export { MoveHeadUseCase };
