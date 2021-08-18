import { Request, Response } from 'express';

import { MoveArmUseCase } from './MoveArmUseCase';

class MoveArmController {
  constructor(private moveArmUseCase: MoveArmUseCase) {}

  handle(request: Request, response: Response): Response {
    const { arm, part, movement } = request.body;

    this.moveArmUseCase.execute({ arm, part, movement });

    return response.status(201).send();
  }
}

export { MoveArmController };
