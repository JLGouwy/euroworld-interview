import { setupServer } from 'msw/node';
import { rest } from 'msw';
import { players as mockPlayers } from './players.mock';

export const externalServicesConfig = {
  tennis: {
    url: 'http://mock.com/tennis',
    dataResponse: mockPlayers,
    status: 200,
  },
};
/* export const externalPostApis = {};
export const externalPutApis = {};
export const externalPatchApis = {};
export const externalDeleteApis = {}; */

export const buildGetRest = (api) => rest.get(api.url, (req, res, ctx) => res(ctx.status(api.status), ctx.json(api.dataResponse)));

const restHandlers = [
  // define GET requests for global use through all tests.
  ...Object.values(externalServicesConfig).map((api) => buildGetRest(api)),
];

export const server = setupServer(...restHandlers);
