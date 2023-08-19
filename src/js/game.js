import Player from './player';

const Game = (playerName) => {
  const player = Player(playerName);
  const enemy = Player('R.O.B.O.T.', true);
};

export default Game;
