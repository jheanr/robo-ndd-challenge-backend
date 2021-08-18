import { Request, Response } from 'express';

import { MoveHeadUseCase } from './MoveHeadUseCase';

class MoveHeadController {
  constructor(private moveHeadService: MoveHeadUseCase) {}

  handle(request: Request, response: Response): Response {
    const { action, movement } = request.body;

    this.moveHeadService.execute({ action, movement });

    return response.status(201).send();
  }
}

export { MoveHeadController };
