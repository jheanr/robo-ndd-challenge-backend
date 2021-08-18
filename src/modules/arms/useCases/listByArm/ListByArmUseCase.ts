import { Arm } from '../../models/Arm';
import { IArmsRepository, IArmTypes } from '../../repositories/IArmsRepository';

class ListByArmUseCase {
  constructor(private armsRepository: IArmsRepository) {}

  execute(arm: IArmTypes): Arm {
    const response = this.armsRepository.getByArm(arm);

    return response;
  }
}

export { ListByArmUseCase };
