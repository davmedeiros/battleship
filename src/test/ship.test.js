import Ship from '../js/ship';

test('Creates a ship object with length, timesHit, isSunk() and hit()', () => {
  const expected = {
    length: 3,
    timesHit: 0,
    isSunk: expect.any(Function),
    hit: expect.any(Function),
  };
  const actual = Ship(3);
  expect(actual).toEqual(expected);
});

test('When ship is hit, return the times it was hit', () => {
  expect(Ship(3).hit()).toBe(1);
});
