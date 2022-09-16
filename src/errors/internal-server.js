import httpStatusCodes from 'http-status-codes';

class InternalServerError extends Error {
  constructor(message, code = 'INTERNAL_SERVER_ERROR') {
    super(message);
    this.code = code;
    this.statusCode = httpStatusCodes.INTERNAL_SERVER_ERROR;
  }
}

export default InternalServerError;
