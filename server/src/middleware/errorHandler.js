function errorHandler(err, req, res, next) {
  console.error(err.stack); // Logging for debugging
  res.status(500).json({ error: err.message });
}

module.exports = errorHandler;
