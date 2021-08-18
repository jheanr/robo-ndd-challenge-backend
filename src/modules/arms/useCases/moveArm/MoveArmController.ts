import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { MoveArmUseCase } from './MoveArmUseCase';

class MoveArmController {
  handle(request: Request, response: Response): Response {
    const { arm, part, movement } = request.body;

    const moveArmUseCase = container.resolve(MoveArmUseCase);

    moveArmUseCase.execute({ arm, part, movement });

    return response.status(204).send();
  }
}

export { MoveArmController };
