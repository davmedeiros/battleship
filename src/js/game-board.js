import Ship from './ship';

const GameBoard = () => {
  const board = [...Array(10)].map(() => [...Array(10).fill(0)]);

  const placeShip = (shipLength, coordinatesY, coordinatesX) => {
    let result;

    if (board[coordinatesY][coordinatesX] === 0) {
      const ship = Ship(shipLength);

      for (let i = 0; i < ship.length; i += 1) {
        board[coordinatesY][coordinatesX + i] = ship;
      }

      result = board[coordinatesY][coordinatesX];
    }

    return result;
  };

  const receiveAttack = () => {};
  const hasAllSunk = () => {};

  return { placeShip, receiveAttack, hasAllSunk };
};

export default GameBoard;
