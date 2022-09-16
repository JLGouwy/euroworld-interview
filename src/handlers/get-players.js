import { formatResponse } from '../services/response';
import { getPlayers } from '../services/tennis';

export const handler = async (event, context) => {
  console.debug(JSON.stringify(event));
  console.debug(JSON.stringify(context));

  try {
    const players = await getPlayers();

    return formatResponse(players);
  } catch (err) {
    console.error(err);
    return formatResponse(null, err);
  }
};
