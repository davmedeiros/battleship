import GameBoard from './game-board';

const Player = (name, isAI = false) => {
  const board = GameBoard();

  const attack = (coordinatesY, coordinatesX, enemyBoard) =>
    enemyBoard.receiveAttack(coordinatesY, coordinatesX);

  const getBoard = () => board;

  return { name, isAI, attack, getBoard };
};

export default Player;
