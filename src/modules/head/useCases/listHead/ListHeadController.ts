import { Request, Response } from 'express';

import { ListHeadUseCase } from './ListHeadUseCase';

class ListHeadController {
  constructor(private listHeadUseCase: ListHeadUseCase) {}

  handle(request: Request, response: Response): Response {
    const head = this.listHeadUseCase.execute();

    return response.json(head);
  }
}

export { ListHeadController };
