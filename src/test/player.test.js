import Player from '../js/player';

test("Creates a player with a name and if it's AI or not", () => {
  const expected = {
    name: 'John Doe',
    isAI: false,
    attack: expect.any(Function),
    getGameBoard: expect.any(Function),
  };
  const player = Player('John Doe');
  expect(player).toEqual(expected);
});

test('Attack returns something if it was successful', () => {
  const player = Player('John Doe');
  const enemy = Player('Amy Row');
  const enemyBoard = enemy.getGameBoard();
  enemyBoard.placeShip(3, 4, 5);
  expect(player.attack(enemyBoard, 4, 6)).not.toBeUndefined();
});

test('Attack returns undefined it hits nothing', () => {
  const player = Player('John Doe');
  const enemy = Player('Amy Row');
  const enemyBoard = enemy.getGameBoard();
  enemyBoard.placeShip(3, 4, 5);
  expect(player.attack(enemyBoard, 7, 8)).toBeUndefined();
});

test("AI doesn't get stuck if there are no spots to attack", () => {
  const robot = Player('Mr. ROBOT', true);
  const enemy = Player('Amy Row');
  const enemyBoard = enemy.getGameBoard();
  expect(robot.attack(enemyBoard)).toBeUndefined();
});

test('AI only attacks once per turn', () => {
  const robot = Player('Mr. ROBOT', true);
  const enemy = Player('Amy Row');
  const enemyBoard = enemy.getGameBoard();
  enemyBoard.placeShip(3, 4, 3);
  robot.attack(enemyBoard);
  const flatBoard = enemyBoard.getBoard().flat(1);
  const shotCount = flatBoard
    .filter((state) => state === 'shot')
    .reduce((total) => total + 1, 0);
  expect(shotCount).toBe(1);
});
