const request = require('supertest');
const app = require('../server');
const server = require('../server');

afterAll((done) => {
  server.close((err) => {
    if (err) {
      console.error(err);
      done(err);
    } else {
      done();
    }
  });
}, 20000);

describe('Test suite 1:', () => {
  test('test 1:', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
  });

  test('test 2:', async () => {
    const res = await request(app).get('/132413');
    expect(res.statusCode).toEqual(404);
  });
});

describe('GET /api', () => {
  it('should respond with "Hello from API"', async () => {
    const res = await request(server).get('/api');
    expect(res.statusCode).toEqual(200);
    expect(res.text).toEqual('Hello from API');
  });
});

describe('POST /api/students', () => {
  it('should reject invalid student data', async () => {
    const res = await request(server).post('/api/students').send({
      name: 'John',
      grade1: -10, // Invalid grade
      grade2: 120, // Invalid grade
      grade3: 'abc', // Invalid grade
    });
    expect(res.statusCode).toEqual(400);
  });
});
