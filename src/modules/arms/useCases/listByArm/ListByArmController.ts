import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { IArmTypes } from '../../repositories/IArmsRepository';
import { ListByArmUseCase } from './ListByArmUseCase';

interface IParams {
  arm: IArmTypes;
}

class ListByArmController {
  handle(request: Request, response: Response): Response {
    const { arm } = request.params as unknown as IParams;

    const listByArmUseCase = container.resolve(ListByArmUseCase);

    const result = listByArmUseCase.execute(arm);

    return response.json(result);
  }
}

export { ListByArmController };
