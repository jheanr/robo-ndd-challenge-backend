import 'reflect-metadata';

import { ArmsRepository } from '@modules/arms/repositories/implementations/ArmsRepository';

import { ListByArmUseCase } from './ListByArmUseCase';

let armsRepository: ArmsRepository;
let listByArmUseCase: ListByArmUseCase;

describe('List arm', () => {
  beforeEach(() => {
    armsRepository = new ArmsRepository();
    listByArmUseCase = new ListByArmUseCase(armsRepository);
  });

  it('Should be able to list arms positions.', () => {
    const result = listByArmUseCase.execute('left');

    const expectResult = {
      elbow: 'Em Repouso',
      elbow_position: 1,
      wrist: 'Em Repouso',
      wrist_position: 3,
    };

    expect(result).toEqual(expectResult);
  });
});
