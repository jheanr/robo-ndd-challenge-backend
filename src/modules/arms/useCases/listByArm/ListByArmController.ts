import { Request, Response } from 'express';

import { IArmTypes } from '../../repositories/IArmsRepository';
import { ListByArmUseCase } from './ListByArmUseCase';

interface IParams {
  arm: IArmTypes;
}

class ListByArmController {
  constructor(private listByArmUseCase: ListByArmUseCase) {}

  handle(request: Request, response: Response): Response {
    const { arm } = request.params as unknown as IParams;

    const result = this.listByArmUseCase.execute(arm);

    return response.json(result);
  }
}

export { ListByArmController };
