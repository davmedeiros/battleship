import Game from '../js/game';

test('Creates a game', () => {
  const expected = {
    player: expect.any(Function),
    enemy: expect.any(Function),
    play: expect.any(Function),
  };
  const game = Game('John Doe');
  expect(game).toEqual(expected);
});
