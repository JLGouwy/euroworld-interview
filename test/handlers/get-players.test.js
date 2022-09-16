import {
  describe, it, expect, vi, beforeEach, afterEach, beforeAll, afterAll,
} from 'vitest';
import { handler } from '../../src/handlers/get-players';
import { players as mockPlayers } from '../mocks/players.mock';
import { externalServicesConfig, server } from '../mocks/server.mock';

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

  it('Should get all players', async () => {
    const requestEvent = {};
    const response = await handler(requestEvent);

    expect(response.statusCode).toBe(200);
    expect(JSON.parse(response.body)).toEqual(mockPlayers.players);
  });
});
