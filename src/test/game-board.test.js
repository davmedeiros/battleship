import GameBoard from '../js/game-board';

test('GameBoard object is created with attributes and methods', () => {
  const expected = {
    placeShip: expect.any(Function),
    receiveAttack: expect.any(Function),
    hasAllSunk: expect.any(Function),
  };
  const actual = GameBoard();
  expect(actual).toEqual(expected);
});
