test('GameBoard object is created with attributes and methods', () => {
  const expected = {
    placeShip: expect.any(Function),
    receiveAttack: expect.any(Function),
    missedAttacks: 0,
    hasAllSunk: false,
  };
  const actual = GameBoard();
  expect(expected).toEqual(actual);
});
