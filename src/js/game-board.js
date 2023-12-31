import Ship from './ship';

const GameBoard = () => {
  const board = [...Array(10)].map(() => [...Array(10)]);

  const placeShip = (
    shipLength,
    coordinatesY,
    coordinatesX,
    isVertical = false
  ) => {
    let result;

    if (
      coordinatesX >= 0 &&
      coordinatesY >= 0 &&
      coordinatesX <= 9 &&
      coordinatesY <= 9 &&
      ((!isVertical && coordinatesX + (shipLength - 1) <= 9) ||
        (isVertical && coordinatesY + (shipLength - 1) <= 9))
    ) {
      if (!board[coordinatesY][coordinatesX]) {
        const ship = Ship(shipLength);

        for (let i = 0; i < ship.length; i += 1) {
          if (isVertical) {
            board[coordinatesY + i][coordinatesX] = ship;
          } else {
            board[coordinatesY][coordinatesX + i] = ship;
          }
        }

        result = board[coordinatesY][coordinatesX];
      }
    }

    return result;
  };

  const receiveAttack = (coordinatesY, coordinatesX) => {
    const target = board[coordinatesY][coordinatesX];

    if (target && target !== 'shot') {
      target.hit();
    }

    board[coordinatesY][coordinatesX] = 'shot';
    return target;
  };

  const hasAllSunk = () => {
    let result = true;
    const flatBoard = board.flat(1);

    flatBoard.forEach((item) => {
      if (typeof item === 'object') {
        result = false;
      }
    });

    return result;
  };

  const getBoard = () => board;

  return { placeShip, receiveAttack, hasAllSunk, getBoard };
};

export default GameBoard;
