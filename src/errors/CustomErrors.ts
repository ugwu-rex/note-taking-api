class NotFoundError extends Error {
  status = 404;
  constructor(message: string) {
    super(message);
  }
}

class BadRequestError extends Error {
  status = 400;
  constructor(message: string) {
    super(message);
  }
}

module.exports = { NotFoundError, BadRequestError };
