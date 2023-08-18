import Player from '../js/player';

test("Creates a player with a name and if it's AI or not", () => {
  const expected = { name: 'John Doe', isAI: false };
  const player = Player('John Doe');
  expect(player).toEqual(expected);
});
