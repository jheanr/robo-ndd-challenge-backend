import { Arm } from '@modules/arms/models/Arm';
import { Arms } from '@modules/arms/models/Arms';
import { movements } from '@utils/movements';

import { IArmsRepository, IArmTypes, IMoveArmDTO } from '../IArmsRepository';

class ArmsRepository implements IArmsRepository {
  private arms: Arms;

  constructor() {
    this.arms = new Arms();
  }

  move({ arm, part, movement }: IMoveArmDTO): void {
    const movementIndex = movement - 1;

    this.arms[arm][part] = movements.arm[part][movementIndex];
    this.arms[arm][`${part}_position`] = movement;
  }

  list(): Arms {
    return this.arms;
  }

  getByArm(arm: IArmTypes): Arm {
    return this.arms[arm];
  }

  isValidMovement({ arm, part, movement }: IMoveArmDTO): boolean {
    if (
      !this.arms[arm] ||
      !this.arms[arm][part] ||
      !movements.arm[part] ||
      !movements.arm[part][movement - 1] ||
      typeof movement !== 'number'
    ) {
      return false;
    }

    const currentArmPartPosition = this.arms[arm][`${part}_position`];
    const nextArmPartPosition = movement;

    if (Math.abs(currentArmPartPosition - nextArmPartPosition) > 1) {
      return false;
    }

    return true;
  }

  canMove(arm: IArmTypes): boolean {
    const positionToValidate = 'Fortemente Contraído';

    if (this.arms[arm].elbow !== positionToValidate) {
      return false;
    }

    return true;
  }
}

export { ArmsRepository };
