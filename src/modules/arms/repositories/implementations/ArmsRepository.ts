import { movements } from '../../../../utils/movements';
import { Arm } from '../../models/Arm';
import { Arms } from '../../models/Arms';
import { IArmsRepository, IArmTypes, IMoveArmDTO } from '../IArmsRepository';

class ArmsRepository implements IArmsRepository {
  private arms: Arms;

  constructor() {
    this.arms = new Arms();
  }

  move({ arm, part, movement }: IMoveArmDTO): void {
    this.arms[arm][part] = movements.arm[part].find(
      position => position.toLowerCase() === movement.toLowerCase(),
    );
  }

  list(): Arms {
    return this.arms;
  }

  getByArm(arm: IArmTypes): Arm {
    return this.arms[arm];
  }

  isValidMovement({ arm, part, movement }: IMoveArmDTO): boolean {
    if (!this.arms[arm] || !this.arms[arm][part] || !movements.arm[part]) {
      return false;
    }

    if (
      !movements.arm[part].some(
        position => position.toLowerCase() === movement.toLowerCase(),
      )
    ) {
      return false;
    }

    const armPartToCheck = movements.arm[part];
    const armPartPositionToCheck = this.arms[arm][part];

    const currentArmPartPosition = armPartToCheck.findIndex(
      position => position === armPartPositionToCheck,
    );

    const nextArmPartPosition = armPartToCheck.findIndex(
      position => position.toLowerCase() === movement.toLowerCase(),
    );

    if (Math.abs(currentArmPartPosition - nextArmPartPosition) > 1) {
      return false;
    }

    return true;
  }

  canMove(arm: IArmTypes): boolean {
    if (this.arms[arm].elbow !== 'Fortemente Contraído') {
      return false;
    }

    return true;
  }
}

export { ArmsRepository };
