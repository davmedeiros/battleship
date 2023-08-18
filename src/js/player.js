import GameBoard from './game-board';

const Player = (name, isAI = false) => {
  const board = GameBoard();

  const attack = (enemyBoard, coordinatesY, coordinatesX) => {
    let targetY = coordinatesY;
    let targetX = coordinatesX;

    if (isAI) {
      targetY = Math.floor(Math.random() * 10);
      targetX = Math.floor(Math.random() * 10);
    }

    return enemyBoard.receiveAttack(targetY, targetX);
  };

  const getBoard = () => board;

  return { name, isAI, attack, getBoard };
};

export default Player;
