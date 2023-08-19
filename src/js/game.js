import Player from './player';

const Game = (playerName) => {
  const player = Player(playerName);
  const enemy = Player('R.O.B.O.T.', true);
  let offense = player;
  let defense = enemy;

  const play = (coordinatesY, coordinatesX) => {
    let result;

    result = offense.attack(defense.getBoard(), coordinatesY, coordinatesX);

    return result;
  };

  return { player, enemy, play };
};

export default Game;
