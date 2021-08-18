// eslint-disable-next-line import/no-extraneous-dependencies
import request from 'supertest';

import { app } from '@root/app';

describe('ListArmsController', () => {
  it('Should be able to list arms positions.', async () => {
    const response = await request(app).get('/arms');

    const expectResponse = {
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

    expect(response.status).toBe(200);
    expect(response.body).toEqual(expectResponse);
  });
});
