import { HeadRepository } from '@modules/head/repositories/implementations/HeadRepository';

import 'reflect-metadata';
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
      movement: 'para cima',
    });

    const headPositions = headRepository.list();

    const expectedResponse = {
      inclination: 'Para Cima',
      rotation: 'Em Repouso',
    };

    expect(headPositions).toEqual(expectedResponse);
  });

  it('Should not be able to skip the next or previous position while moving.', () => {
    expect(() => {
      moveHeadUseCase.execute({
        action: 'inclination',
        movement: 'para cima',
      });

      moveHeadUseCase.execute({
        action: 'inclination',
        movement: 'para baixo',
      });
    }).toThrow('Invalid head movement.');
  });

  it(`Should not be able to rotate if inclination is 'para baixo'`, () => {
    expect(() => {
      moveHeadUseCase.execute({
        action: 'inclination',
        movement: 'para baixo',
      });

      moveHeadUseCase.execute({
        action: 'rotation',
        movement: 'rotação 45°',
      });
    }).toThrow(`You can't rotate the head while its inclined this way.`);
  });
});
