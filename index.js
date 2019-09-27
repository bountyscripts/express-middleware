// Setup useful variables
const IS_PRODUCTION = process.env.NODE_ENV === "production";

// Error handler for requests
async function errorHandler(error, req, res, next) {
  res.status(res.statusCode !== 200 ? res.statusCode : 500);
  // console.log("hit", res.statusCode);
  return res.json({
    error: error.message,
    stack: IS_PRODUCTION ? {} : error.stack
  });
}

// Handle 404 errors
async function notFoundHandler(req, res, next) {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  res.status(404);
  next(error);
}

// Export middleware
module.exports = { errorHandler, notFoundHandler };
