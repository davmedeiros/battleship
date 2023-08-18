import Ship from './ship';

const GameBoard = () => {
  const board = [...Array(10)].map(() => [...Array(10)]);

  const placeShip = (shipLength, coordinatesY, coordinatesX) => {
    if (!board[coordinatesY][coordinatesY]) {
      const ship = Ship(shipLength);
      board[coordinatesY][coordinatesX] = ship;
      // console.table(board[coordinatesY][coordinatesX]);
    }
    return board[coordinatesY][coordinatesX];
  };

  const receiveAttack = () => {};
  const hasAllSunk = () => {};

  return { placeShip, receiveAttack, hasAllSunk };
};

export default GameBoard;
