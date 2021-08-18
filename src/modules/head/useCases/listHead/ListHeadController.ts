import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ListHeadUseCase } from './ListHeadUseCase';

class ListHeadController {
  handle(request: Request, response: Response): Response {
    const listHeadUseCase = container.resolve(ListHeadUseCase);

    const result = listHeadUseCase.execute();

    return response.json(result);
  }
}

export { ListHeadController };
