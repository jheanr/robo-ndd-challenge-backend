import 'reflect-metadata';

import { HeadRepository } from '@modules/head/repositories/implementations/HeadRepository';

import { ListHeadUseCase } from './ListHeadUseCase';

let headRepository: HeadRepository;
let listHeadUseCase: ListHeadUseCase;

describe('Move head', () => {
  beforeEach(() => {
    headRepository = new HeadRepository();
    listHeadUseCase = new ListHeadUseCase(headRepository);
  });

  it('Should be able to list head positions.', () => {
    const result = listHeadUseCase.execute();

    const expectResult = {
      inclination: 'Em Repouso',
      inclination_position: 2,
      rotation: 'Em Repouso',
      rotation_position: 3,
    };

    expect(result).toEqual(expectResult);
  });
});
