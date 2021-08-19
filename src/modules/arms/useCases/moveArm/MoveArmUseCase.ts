import { inject, injectable } from 'tsyringe';

import { Arm } from '@modules/arms/models/Arm';
import {
  IArmsRepository,
  IMoveArmDTO,
} from '@modules/arms/repositories/IArmsRepository';
import { AppError } from '@shared/errors/AppError';

type IRequest = IMoveArmDTO;

@injectable()
class MoveArmUseCase {
  constructor(
    @inject('ArmsRepository')
    private armsRepository: IArmsRepository,
  ) {}

  execute({ arm, part, movement }: IRequest): Arm {
    if (!this.armsRepository.isValidMovement({ arm, part, movement })) {
      throw new AppError('Invalid arm movement.');
    }

    if (part === 'wrist' && !this.armsRepository.canMove(arm)) {
      throw new AppError(
        `You can't move the wrist with the current elbow position.`,
      );
    }

    this.armsRepository.move({ arm, part, movement });

    return this.armsRepository.getByArm(arm);
  }
}

export { MoveArmUseCase };
