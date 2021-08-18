import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { MoveHeadUseCase } from './MoveHeadUseCase';

class MoveHeadController {
  handle(request: Request, response: Response): Response {
    const { action, movement } = request.body;

    const moveHeadService = container.resolve(MoveHeadUseCase);

    moveHeadService.execute({ action, movement });

    return response.status(204).send();
  }
}

export { MoveHeadController };
