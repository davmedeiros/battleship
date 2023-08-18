import GameBoard from './game-board';

const Player = (name, isAI = false) => {
  const board = GameBoard();

  const aiAttack = (enemyBoard) => {
    let result;
    let coordinatesY;
    let coordinatesX;

    while (!result || result === 'shot') {
      coordinatesY = Math.floor(Math.random() * 10);
      coordinatesX = Math.floor(Math.random() * 10);
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

  const getBoard = () => board;

  return { name, isAI, attack, getBoard };
};

export default Player;
