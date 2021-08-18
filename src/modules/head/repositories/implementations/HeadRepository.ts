import { Head } from '@modules/head/models/Head';
import { movements } from '@utils/movements';

import { IHeadRepository, IMoveHeadDTO } from '../IHeadRepository';

class HeadRepository implements IHeadRepository {
  private head: Head;

  constructor() {
    this.head = new Head();
  }

  move({ action, movement }: IMoveHeadDTO): void {
    const movementIndex = movement - 1;

    this.head[action] = movements.head[action][movementIndex];
    this.head[`${action}_position`] = movement;
  }

  list(): Head {
    return this.head;
  }

  isValidMovement({ action, movement }: IMoveHeadDTO): boolean {
    if (
      !this.head[action] ||
      !movements.head[action] ||
      !movements.head[action][movement - 1] ||
      typeof movement !== 'number'
    ) {
      return false;
    }

    const currentHeadPosition = this.head[`${action}_position`];
    const nextHeadPosition = movement;

    if (Math.abs(currentHeadPosition - nextHeadPosition) > 1) {
      return false;
    }

    return true;
  }

  canRotate(): boolean {
    const positionToValidate = 'Para Baixo';

    if (this.head.inclination === positionToValidate) {
      return false;
    }

    return true;
  }
}

export { HeadRepository };
