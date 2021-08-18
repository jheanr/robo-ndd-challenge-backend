import { movements } from '../../../../utils/movements';
import { Head } from '../../models/Head';
import { IHeadRepository, IMoveHeadDTO } from '../IHeadRepository';

class HeadRepository implements IHeadRepository {
  private head: Head;

  private static INSTANCE: HeadRepository;

  private constructor() {
    this.head = new Head();
  }

  public static getInstance(): HeadRepository {
    if (!HeadRepository.INSTANCE) {
      HeadRepository.INSTANCE = new HeadRepository();
    }

    return HeadRepository.INSTANCE;
  }

  move({ action, movement }: IMoveHeadDTO): void {
    this.head[action] = movements.head[action].find(
      position => position.toLowerCase() === movement.toLowerCase(),
    );
  }

  list(): Head {
    return this.head;
  }

  isValidMovement({ action, movement }: IMoveHeadDTO): boolean {
    if (!this.head[action] || !movements.head[action]) {
      return false;
    }

    const headMovementToCheck = movements.head[action];
    const headPositionToCheck = this.head[action];

    const currentHeadPosition = headMovementToCheck.findIndex(
      position => position === headPositionToCheck,
    );

    const nextHeadPosition = headMovementToCheck.findIndex(
      position => position.toLowerCase() === movement.toLowerCase(),
    );

    if (Math.abs(currentHeadPosition - nextHeadPosition) > 1) {
      return false;
    }

    return true;
  }

  canRotate(): boolean {
    if (this.head.inclination === 'Para Baixo') {
      return false;
    }

    return true;
  }
}

export { HeadRepository };
