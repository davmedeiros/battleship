import Ship from '../js/ship';

test('Creates a ship object with length, timesHit, isSunk() and hit()', () => {
  const expected = {
    length: 3,
    isSunk: expect.any(Function),
    hit: expect.any(Function),
  };
  const actual = Ship(3);
  expect(actual).toEqual(expected);
});

test('When ship is hit, return the times it was hit', () => {
  const ship = Ship(3);
  ship.hit();
  expect(ship.hit()).toBe(2);
});

test('Returns false if the ship is not sunk', () => {
  expect(Ship(1).isSunk()).toBe(false);
});

test('Returns true if the ship is sunk', () => {
  const ship = Ship(1);
  ship.hit();
  expect(ship.isSunk()).toBe(true);
});
