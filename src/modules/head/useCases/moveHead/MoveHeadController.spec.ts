// eslint-disable-next-line import/no-extraneous-dependencies
import request from 'supertest';

import { app } from '@root/app';

describe('MoveHeadController', () => {
  it('Should be able to move head to a new position.', async () => {
    const response = await request(app).patch('/head').send({
      action: 'inclination',
      movement: 1,
    });

    expect(response.status).toBe(204);
  });

  it('Should not be able to skip the next or previous position while moving.', async () => {
    const response = await request(app).patch('/head').send({
      action: 'rotation',
      movement: 1,
    });

    expect(response.status).toBe(400);
  });

  it(`Should not be able to rotate if inclination is 'para baixo'`, async () => {
    await request(app).patch('/head').send({
      action: 'inclination',
      movement: 2,
    });

    await request(app).patch('/head').send({
      action: 'inclination',
      movement: 3,
    });

    const response = await request(app).patch('/head').send({
      action: 'rotation',
      movement: 2,
    });

    expect(response.status).toBe(400);
  });

  it('Should not be able to move to an inexistent position.', async () => {
    const response = await request(app).patch('/head').send({
      action: 'inclination',
      movement: 0,
    });

    expect(response.status).toBe(400);
  });
});
