import GameBoard from './game-board';

const Player = (name, isAI = false) => {
  const board = GameBoard();

  const aiAttack = (enemyBoard) => {
    let result;
    let coordinatesY;
    let coordinatesX;
    let target = 'shot';

    while (target === 'shot' && !enemyBoard.hasAllSunk()) {
      coordinatesY = Math.floor(Math.random() * 10);
      coordinatesX = Math.floor(Math.random() * 10);
      target = enemyBoard.getBoard()[coordinatesY][coordinatesX];
    }

    if (!enemyBoard.hasAllSunk()) {
      result = enemyBoard.receiveAttack(coordinatesY, coordinatesX);
    }

    return result;
  };

  const attack = (enemyBoard, coordinatesY, coordinatesX) => {
    let result;

    if (isAI) {
      result = aiAttack(enemyBoard);
    } else {
      result = enemyBoard.receiveAttack(coordinatesY, coordinatesX);
    }

    return result;
  };

  const getGameBoard = () => board;

  return { name, isAI, attack, getGameBoard };
};

export default Player;
