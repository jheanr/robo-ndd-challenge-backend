import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ListArmsUseCase } from './ListArmsUseCase';

class ListArmsController {
  handle(request: Request, response: Response): Response {
    const listArmsUseCase = container.resolve(ListArmsUseCase);

    const result = listArmsUseCase.execute();

    return response.json(result);
  }
}

export { ListArmsController };
