import Game from '../js/game';

test('Creates a game', () => {
  const expected = {
    player: expect.any(Object),
    enemy: expect.any(Object),
  };
  const game = Game('John Doe');
  expect(game).toEqual(expected);
});
