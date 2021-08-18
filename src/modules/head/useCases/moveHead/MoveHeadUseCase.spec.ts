import 'reflect-metadata';

import { HeadRepository } from '@modules/head/repositories/implementations/HeadRepository';

import { MoveHeadUseCase } from './MoveHeadUseCase';

let headRepository: HeadRepository;
let moveHeadUseCase: MoveHeadUseCase;

describe('Move head', () => {
  beforeEach(() => {
    headRepository = new HeadRepository();
    moveHeadUseCase = new MoveHeadUseCase(headRepository);
  });

  it('Should be able to move the head to a new position.', () => {
    moveHeadUseCase.execute({
      action: 'inclination',
      movement: 1,
    });

    const headPositions = headRepository.list();

    const expectResult = {
      inclination: 'Para Cima',
      inclination_position: 1,
      rotation: 'Em Repouso',
      rotation_position: 3,
    };

    expect(headPositions).toEqual(expectResult);
  });

  it('Should not be able to skip the next or previous position while moving.', () => {
    expect(() => {
      moveHeadUseCase.execute({
        action: 'inclination',
        movement: 1,
      });

      moveHeadUseCase.execute({
        action: 'inclination',
        movement: 3,
      });
    }).toThrow('Invalid head movement.');
  });

  it(`Should not be able to rotate if inclination is 'para baixo'`, () => {
    expect(() => {
      moveHeadUseCase.execute({
        action: 'inclination',
        movement: 3,
      });

      moveHeadUseCase.execute({
        action: 'rotation',
        movement: 2,
      });
    }).toThrow(
      `You can't rotate the head with the current inclination position.`,
    );
  });

  it('Should not be able to move to an inexistent position.', () => {
    expect(() => {
      moveHeadUseCase.execute({
        action: 'inclination',
        movement: 3,
      });

      moveHeadUseCase.execute({
        action: 'inclination',
        movement: 4,
      });
    }).toThrow('Invalid head movement.');
  });
});
