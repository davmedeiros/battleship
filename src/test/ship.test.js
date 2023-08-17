import Ship from '../js/ship';

test('Creates a ship object with length, number of hits and sunk boolean', () => {
  expect(Ship(3)).toEqual({ length: 3, timesHit: 0, isSunk: false });
});
