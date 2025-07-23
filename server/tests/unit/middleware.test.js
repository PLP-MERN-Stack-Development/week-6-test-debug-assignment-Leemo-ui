const errorHandler = require('../../src/middleware/errorHandler');

test('errorHandler sends error response', () => {
  const err = new Error('Test error');
  const req = {};
  const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
  const next = jest.fn();

  errorHandler(err, req, res, next);

  expect(res.status).toHaveBeenCalledWith(500);
  expect(res.json).toHaveBeenCalledWith({ error: 'Test error' });
});
