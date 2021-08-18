// eslint-disable-next-line import/no-extraneous-dependencies
import request from 'supertest';

import { app } from '@root/app';

describe('ListHeadController', () => {
  it('Should be able to list head positions.', async () => {
    const response = await request(app).get('/head');

    const expectResponse = {
      inclination: 'Em Repouso',
      inclination_position: 2,
      rotation: 'Em Repouso',
      rotation_position: 3,
    };

    expect(response.status).toBe(200);
    expect(response.body).toEqual(expectResponse);
  });
});
