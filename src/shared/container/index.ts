import { container } from 'tsyringe';

import { IArmsRepository } from '../../modules/arms/repositories/IArmsRepository';
import { ArmsRepository } from '../../modules/arms/repositories/implementations/ArmsRepository';
import { IHeadRepository } from '../../modules/head/repositories/IHeadRepository';
import { HeadRepository } from '../../modules/head/repositories/implementations/HeadRepository';

container.registerSingleton<IHeadRepository>('HeadRepository', HeadRepository);
container.registerSingleton<IArmsRepository>('ArmsRepository', ArmsRepository);
