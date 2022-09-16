import { StatusCodes } from 'http-status-codes';
import InternalServerError from '../errors/internal-server';

const formatError = (err) => {
  let error = { ...err };
  if (!error.statusCode) {
    error = new InternalServerError('Unexpected error occured on the server. Please contact the team.');
  }

  if (error.code >= StatusCodes.INTERNAL_SERVER_ERROR) {
    console.error(error);
  } else {
    console.info(error);
  }

  return {
    statusCode: error.statusCode,
    body: JSON.stringify(
      {
        errors: error.data && error.data.length > 0
          ? error.data
          : [{
            type: error.code,
            description: error.message,
          }],
      },
    ),
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  };
};

export const formatResponse = (data, error, httpCode, headers = {}) => {
  if (error) {
    return formatError(error);
  }

  return {
    statusCode: httpCode || StatusCodes.OK,
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Expose-Headers': 'Content-Range',
      ...headers,
    },
  };
};
