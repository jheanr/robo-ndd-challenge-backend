import { Head } from '../models/Head';

type IActionTypes = 'inclination' | 'rotation';

interface IMoveHeadDTO {
  action: IActionTypes;
  movement: string;
}

interface IHeadRepository {
  move({ action, movement }: IMoveHeadDTO): void;
  list(): Head;
  isValidMovement({ action, movement }: IMoveHeadDTO): boolean;
  canRotate(): boolean;
}

export { IHeadRepository, IMoveHeadDTO };
