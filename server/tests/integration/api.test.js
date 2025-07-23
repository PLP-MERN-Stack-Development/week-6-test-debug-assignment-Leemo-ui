const request = require('supertest');
const app = require('../../src/app');
const mongoose = require('mongoose');

beforeAll(async () => {
  // Connect to test DB
  await mongoose.connect(process.env.TEST_DB_URI);
});

afterAll(async () => {
  await mongoose.connection.close();
});

describe('API Integration', () => {
  test('GET /api/items returns items', async () => {
    const res = await request(app).get('/api/items');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  test('POST /api/items creates item', async () => {
    const res = await request(app)
      .post('/api/items')
      .send({ name: 'Test Item' });
    expect(res.statusCode).toBe(201);
    expect(res.body.name).toBe('Test Item');
  });

  // ...add more tests for authentication, validation, etc.
});
