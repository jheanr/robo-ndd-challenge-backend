import { inject, injectable } from 'tsyringe';

import { Arm } from '@modules/arms/models/Arm';
import {
  IArmsRepository,
  IArmTypes,
} from '@modules/arms/repositories/IArmsRepository';

@injectable()
class ListByArmUseCase {
  constructor(
    @inject('ArmsRepository')
    private armsRepository: IArmsRepository,
  ) {}

  execute(arm: IArmTypes): Arm {
    const result = this.armsRepository.getByArm(arm);

    return result;
  }
}

export { ListByArmUseCase };
