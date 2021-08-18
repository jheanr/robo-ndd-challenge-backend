import { Arm } from '../models/Arm';
import { Arms } from '../models/Arms';

export type IArmTypes = 'left' | 'right';

type IArmParts = 'elbow' | 'wrist';

interface IMoveArmDTO {
  arm: IArmTypes;
  part: IArmParts;
  movement: number;
}

interface IArmsRepository {
  move({ arm, part, movement }: IMoveArmDTO): void;
  list(): Arms;
  getByArm(arm: IArmTypes): Arm;
  isValidMovement({ arm, part, movement }: IMoveArmDTO): boolean;
  canMove(arm: IArmTypes): boolean;
}

export { IArmsRepository, IMoveArmDTO };
