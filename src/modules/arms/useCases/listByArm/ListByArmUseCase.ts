import { inject, injectable } from 'tsyringe';

import { Arm } from '../../models/Arm';
import { IArmsRepository, IArmTypes } from '../../repositories/IArmsRepository';

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
