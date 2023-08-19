import Game from '../js/game';

test('Creates a game', () => {
  const expected = {
    player: expect.any(Object),
    enemy: expect.any(Object),
    play: expect.any(Function),
  };
  const game = Game('John Doe');
  expect(game).toEqual(expected);
});

test('Returns something when it plays successfully', () => {
  const game = Game('John Doe');
  expect(game.play(3, 2)).not.toBeUndefined();
});

test("play() affects the player's ships", () => {
  const game = Game('John Doe');
  const { enemy } = game;
  const ship = enemy.getBoard().placeShip(3, 3, 2);
  game.play(3, 2);
  expect(ship.hit()).toBe(2);
});
