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

test("Returns something if it's able to place the ship", () => {
  const gameBoard = GameBoard();
  const actual = gameBoard.placeShip(3, 3, 2);
  expect(actual).not.toBeUndefined();
});

test("Returns undefined if the ship can't be placed", () => {
  const gameBoard = GameBoard();
  gameBoard.placeShip(3, 3, 2);
  const place2 = gameBoard.placeShip(3, 3, 2);
  expect(place2).toBeUndefined();
});

test('Ships occupy their full length', () => {
  const gameBoard = GameBoard();
  gameBoard.placeShip(3, 3, 2);
  const place2 = gameBoard.placeShip(2, 3, 4);
  expect(place2).toBeUndefined();
});

test('Ships get placed in a given orientation', () => {
  const gameBoard = GameBoard();
  gameBoard.placeShip(3, 3, 2, true);
  const place2 = gameBoard.placeShip(2, 5, 2);
  expect(place2).toBeUndefined();
});

test('Receives a successful attack on different segments', () => {
  const gameBoard = GameBoard();
  const ship = gameBoard.placeShip(2, 3, 2);
  gameBoard.receiveAttack(3, 3);
  gameBoard.receiveAttack(3, 2);
  expect(ship.hit()).toBe(3);
});

test('Receives a unsuccessful attack', () => {
  const gameBoard = GameBoard();
  const ship = gameBoard.placeShip(2, 3, 2);
  gameBoard.receiveAttack(4, 3);
  expect(ship.hit()).toBe(1);
});

test('Attacks on the same spot are ignored', () => {
  const gameBoard = GameBoard();
  const ship = gameBoard.placeShip(3, 5, 3, true);
  gameBoard.receiveAttack(5, 3);
  gameBoard.receiveAttack(5, 3);
  expect(ship.hit()).toBe(2);
});

test('Return true if all have sunk', () => {
  const gameBoard = GameBoard();
  gameBoard.placeShip(1, 5, 2);
  gameBoard.receiveAttack(5, 2);
  expect(gameBoard.hasAllSunk()).toBe(true);
});
