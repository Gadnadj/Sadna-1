// Import the necessary modules
const request = require('supertest');
const app = require('../server');
const server = require('../server');

// After all tests have completed, close the server
afterAll((done) => {
  server.close((err) => {
    if (err) {
      console.error(err); // Log the error if there is one
      done(err);
    } else {
      done(); // If no error, signal that we're done
    }
  });
}, 20000);

// Test suite 1
describe('Test suite 1:', () => {
  // Test 1: GET request to the root of the server
  test('test 1:', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200); // Expect a 200 OK status code
  });

  // Test 2: GET request to an invalid route
  test('test 2:', async () => {
    const res = await request(app).get('/132413');
    expect(res.statusCode).toEqual(404); // Expect a 404 Not Found status code
  });
});

// Test suite for the /api route
describe('GET /api', () => {
  // Test that the /api route responds with "Hello from API"
  it('should respond with "Hello from API"', async () => {
    const res = await request(server).get('/api');
    expect(res.statusCode).toEqual(200);
    expect(res.text).toEqual('Hello from API');
  });
});

// Test suite for the POST /api/students route
describe('POST /api/students', () => {
  // Test that invalid student data is rejected
  it('should reject invalid student data', async () => {
    const res = await request(server).post('/api/students').send({
      name: 'John',
      grade1: -10, // Invalid grade
      grade2: 120, // Invalid grade
      grade3: 'abc', // Invalid grade
    });
    expect(res.statusCode).toEqual(400); // Expect a 400 Bad Request status code
  });
});
