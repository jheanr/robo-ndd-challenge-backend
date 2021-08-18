// eslint-disable-next-line import/no-extraneous-dependencies
import request from 'supertest';

import { app } from '@root/app';

describe('ListByArmController', () => {
  it('Should be able to list arm parts positions.', async () => {
    const response = await request(app).get('/arms/left');

    const expectResponse = {
      elbow: 'Em Repouso',
      elbow_position: 1,
      wrist: 'Em Repouso',
      wrist_position: 3,
    };

    expect(response.status).toBe(200);
    expect(response.body).toEqual(expectResponse);
  });
});
