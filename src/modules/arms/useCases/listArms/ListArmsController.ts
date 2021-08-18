import { Request, Response } from 'express';

import { ListArmsUseCase } from './ListArmsUseCase';

class ListArmsController {
  constructor(private listArmsUseCase: ListArmsUseCase) {}

  handle(request: Request, response: Response): Response {
    const arms = this.listArmsUseCase.execute();

    return response.json(arms);
  }
}

export { ListArmsController };
