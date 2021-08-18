// eslint-disable-next-line import/no-extraneous-dependencies
import request from 'supertest';

import { app } from '@root/app';

describe('MoveArmController', () => {
  it('Should be able to move the arm to a new position.', async () => {
    const response = await request(app).patch('/arms').send({
      arm: 'left',
      part: 'elbow',
      movement: 2,
    });

    expect(response.status).toBe(204);
  });

  it('Should not be able to skip the next or previous position while moving.', async () => {
    await request(app).patch('/arms').send({
      arm: 'left',
      part: 'elbow',
      movement: 1,
    });

    const response = await request(app).patch('/arms').send({
      arm: 'left',
      part: 'elbow',
      movement: 3,
    });

    expect(response.status).toBe(400);
  });

  it(`Should not be able to move the wrist if elbow isn't 'fortemente contraído'`, async () => {
    const response = await request(app).patch('/arms').send({
      arm: 'left',
      part: 'wrist',
      movement: 2,
    });

    expect(response.status).toBe(400);
  });

  it('Should not be able to move to an inexistent position.', async () => {
    const response = await request(app).patch('/arms').send({
      arm: 'left',
      part: 'elbow',
      movement: 0,
    });

    expect(response.status).toBe(400);
  });
});
