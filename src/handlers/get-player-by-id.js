import { formatResponse } from '../services/response';
import { getPlayerById } from '../services/tennis';
import NotFound from '../errors/not-found';

export const handler = async (event, context) => {
  console.debug(JSON.stringify(event));
  console.debug(JSON.stringify(context));

  try {
    const { playerId } = event.pathParameters;
    const player = await getPlayerById(parseInt(playerId, 10));

    if (!player) {
      throw new NotFound(playerId);
    }

    return formatResponse(player);
  } catch (err) {
    return formatResponse(null, err);
  }
};
