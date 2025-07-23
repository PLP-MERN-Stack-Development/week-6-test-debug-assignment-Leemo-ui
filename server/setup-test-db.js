const { MongoMemoryServer } = require('mongodb-memory-server');

module.exports = async () => {
  const mongod = await MongoMemoryServer.create();
  process.env.TEST_DB_URI = mongod.getUri();
  global.__MONGOD__ = mongod;
};