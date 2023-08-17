import Ship from '../js/ship';

test('When a ship object with length, number of hits and sunk boolean', () => {
  expect(Ship(3, 0, false)).toEqual({ length: 3, timesHit: 0, isSunk: false });
});
