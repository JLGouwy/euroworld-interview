import httpStatusCodes from 'http-status-codes';

class NotFound extends Error {
  constructor(id, code = 'NOT_FOUND') {
    super(`The resource ${id} is not found.`);
    this.code = code;
    this.statusCode = httpStatusCodes.NOT_FOUND;
  }
}

export default NotFound;
