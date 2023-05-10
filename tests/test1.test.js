const request = require('supertest');
const app = require('../server');

describe('Test suite 1:', () => {
  test('test 1:', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
  });

  test('test 2:', async () => {
    const res = await request(app).get('/132413');
    expect(res.statusCode).toEqual(404);
  });

  afterAll(async () => {
    // Fermer le serveur après la fin de tous les tests
    await app.close();
  });
});
