import 'reflect-metadata';

import { ArmsRepository } from '@modules/arms/repositories/implementations/ArmsRepository';

import { ListArmsUseCase } from './ListArmsUseCase';

let armsRepository: ArmsRepository;
let listArmsUseCase: ListArmsUseCase;

describe('List arms', () => {
  beforeEach(() => {
    armsRepository = new ArmsRepository();
    listArmsUseCase = new ListArmsUseCase(armsRepository);
  });

  it('Should be able to list arms positions.', () => {
    const result = listArmsUseCase.execute();

    const expectResult = {
      left: {
        elbow: 'Em Repouso',
        elbow_position: 1,
        wrist: 'Em Repouso',
        wrist_position: 3,
      },
      right: {
        elbow: 'Em Repouso',
        elbow_position: 1,
        wrist: 'Em Repouso',
        wrist_position: 3,
      },
    };

    expect(result).toEqual(expectResult);
  });
});
