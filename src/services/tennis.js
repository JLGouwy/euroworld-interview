import axios from 'axios';

export const getPlayers = async () => {
  const { data: { players } } = await axios({
    method: 'get',
    url: process.env.TENNIS_PLAYER_API_URL,
  });

  return players || [];
};

export const getPlayerById = async (id) => {
  const { data: { players } } = await axios({
    method: 'get',
    url: process.env.TENNIS_PLAYER_API_URL,
  });

  if (!players) {
    return null;
  }

  const playerFound = players.filter((player) => player.id === id);

  return playerFound.length !== 0 ? playerFound : null;
};
