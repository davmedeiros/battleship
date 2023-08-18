import Player from '../js/player';

test("Creates a player with a name and if it's AI or not", () => {
  const expected = {
    name: 'John Doe',
    isAI: false,
    attack: expect.any(Function),
  };
  const player = Player('John Doe');
  expect(player).toEqual(expected);
});
