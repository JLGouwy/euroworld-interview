import {
  describe, it, expect, vi, afterEach, beforeEach, beforeAll, afterAll,
} from 'vitest';
import { handler } from '../../src/handlers/get-player-by-id';
import { players as mockPlayers } from '../mocks/players.mock';
import { buildGetRest, externalServicesConfig, server } from '../mocks/server.mock';

const currentEnv = process.env;

describe('Handler - Get Players', () => {
  // Start server before all tests
  beforeAll(() => server.listen({ onUnhandledRequest: 'error' }));

  //  Close server after all tests
  afterAll(() => server.close());

  beforeEach(() => {
    process.env = {
      ...currentEnv,
      TENNIS_PLAYER_API_URL: externalServicesConfig.tennis.url,
    };
  });

  afterEach(() => {
    vi.clearAllMocks();
    server.resetHandlers();
  });

  it('Should get the requested player', async () => {
    const mockPlayer = mockPlayers.players.filter(({ id }) => id === 52);

    const requestEvent = {
      pathParameters: {
        playerId: 52,
      },
    };
    const response = await handler(requestEvent);

    expect(response.statusCode).toBe(200);
    expect(JSON.parse(response.body)).toEqual(mockPlayer);
  });

  it('Should return a 404 not found when no player found', async () => {
    const requestEvent = {
      pathParameters: {
        playerId: 56,
      },
    };
    const response = await handler(requestEvent);

    expect(response.statusCode).toBe(404);
  });

  it('Should return a 500 when the external call fails', async () => {
    server.use(buildGetRest({
      ...externalServicesConfig.tennis,
      status: 404,
    }));
    const requestEvent = {
      pathParameters: {
        playerId: 56,
      },
    };
    const response = await handler(requestEvent);

    expect(response.statusCode).toBe(500);
  });
});
