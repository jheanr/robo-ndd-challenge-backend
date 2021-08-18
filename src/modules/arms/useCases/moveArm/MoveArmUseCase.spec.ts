import 'reflect-metadata';

import { ArmsRepository } from '@modules/arms/repositories/implementations/ArmsRepository';

import { MoveArmUseCase } from './MoveArmUseCase';

let armsRepository: ArmsRepository;
let moveArmUseCase: MoveArmUseCase;

describe('Move arm', () => {
  beforeEach(() => {
    armsRepository = new ArmsRepository();
    moveArmUseCase = new MoveArmUseCase(armsRepository);
  });

  it('Should be able to move the arm to a new position.', () => {
    moveArmUseCase.execute({
      arm: 'left',
      part: 'elbow',
      movement: 2,
    });

    const armPosition = armsRepository.getByArm('left');

    const expectResult = {
      elbow: 'Levemente Contraído',
      elbow_position: 2,
      wrist: 'Em Repouso',
      wrist_position: 3,
    };

    expect(armPosition).toEqual(expectResult);
  });

  it('Should not be able to skip the next or previous position while moving.', () => {
    expect(() => {
      moveArmUseCase.execute({
        arm: 'left',
        part: 'elbow',
        movement: 3,
      });
    }).toThrow('Invalid arm movement.');
  });

  it(`Should not be able to move the wrist if elbow isn't 'fortemente contraído'`, () => {
    expect(() => {
      moveArmUseCase.execute({
        arm: 'left',
        part: 'wrist',
        movement: 2,
      });
    }).toThrow(`You can't move the wrist with the current elbow position.`);
  });

  it('Should not be able to move to an inexistent position.', () => {
    expect(() => {
      moveArmUseCase.execute({
        arm: 'left',
        part: 'elbow',
        movement: 0,
      });
    }).toThrow('Invalid arm movement.');
  });
});
