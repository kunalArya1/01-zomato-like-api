export const generatedErrors = (err, re, res, next) => {
  const statusCode = err.statusCode || 500;
  res.status(statusCode).json({
    message: err.message,
    errorName: err.name,
    // stack: err.stack,
  });
};
