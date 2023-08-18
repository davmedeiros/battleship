import GameBoard from '../js/game-board';
import Ship from '../js/ship';

test('GameBoard object is created with attributes and methods', () => {
  const expected = {
    placeShip: expect.any(Function),
    receiveAttack: expect.any(Function),
    hasAllSunk: expect.any(Function),
  };
  const actual = GameBoard();
  expect(actual).toEqual(expected);
});

test("Returns a ship if it's able to place it", () => {
  const gameBoard = GameBoard();
  const actual = gameBoard.placeShip(3, 3, 2);
  expect(actual).not.toBeUndefined();
});
