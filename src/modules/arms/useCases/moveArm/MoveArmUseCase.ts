import {
  IArmsRepository,
  IMoveArmDTO,
} from '../../repositories/IArmsRepository';

type IRequest = IMoveArmDTO;

class MoveArmUseCase {
  constructor(private armsRepository: IArmsRepository) {}

  execute({ arm, part, movement }: IRequest): void {
    if (!this.armsRepository.isValidMovement({ arm, part, movement })) {
      throw new Error('Invalid arm movement.');
    }

    if (part === 'wrist' && !this.armsRepository.canMove(arm)) {
      throw new Error(
        `You can't move the wrist with the current elbow position.`,
      );
    }

    this.armsRepository.move({ arm, part, movement });
  }
}

export { MoveArmUseCase };
