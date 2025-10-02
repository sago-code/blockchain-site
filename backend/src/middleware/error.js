export function notFound(req, res, next) {
  const err = new Error(`No encontrado: ${req.originalUrl}`);
  err.status = 404;
  next(err);
}

export function errorHandler(err, req, res, next) { // eslint-disable-line
  const status = err.status || 500;
  const payload = {
    message: err.message || 'Error interno del servidor',
    stack: process.env.NODE_ENV === 'development' ? err.stack : undefined
  };
  res.status(status).json(payload);
}
