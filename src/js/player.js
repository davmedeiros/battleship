import GameBoard from './game-board';

const Player = (name, isAI = false) => {
  const attack = (coordinatesY, coordinatesX) => {};

  return { name, isAI, attack };
};

export default Player;
