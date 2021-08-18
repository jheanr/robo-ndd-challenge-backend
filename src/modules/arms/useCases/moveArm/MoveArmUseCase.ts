import { inject, injectable } from 'tsyringe';

import { AppError } from '../../../../shared/errors/AppError';
import {
  IArmsRepository,
  IMoveArmDTO,
} from '../../repositories/IArmsRepository';

type IRequest = IMoveArmDTO;

@injectable()
class MoveArmUseCase {
  constructor(
    @inject('ArmsRepository')
    private armsRepository: IArmsRepository,
  ) {}

  execute({ arm, part, movement }: IRequest): void {
    if (!this.armsRepository.isValidMovement({ arm, part, movement })) {
      throw new AppError('Invalid arm movement.');
    }

    if (part === 'wrist' && !this.armsRepository.canMove(arm)) {
      throw new AppError(
        `You can't move the wrist with the current elbow position.`,
      );
    }

    this.armsRepository.move({ arm, part, movement });
  }
}

export { MoveArmUseCase };
