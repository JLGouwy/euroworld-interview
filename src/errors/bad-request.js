import httpStatusCodes from 'http-status-codes';

class BadRequest extends Error {
  constructor(message, code = 'BAD_REQUEST') {
    super(message);
    this.code = code;
    this.statusCode = httpStatusCodes.BAD_REQUEST;
  }
}

export default BadRequest;
