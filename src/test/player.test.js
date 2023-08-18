import Player from '../js/player';

test("Creates a player with a name and if it's AI or not", () => {
  const expected = {
    name: 'John Doe',
    isAI: false,
    attack: expect.any(Function),
    getBoard: expect.any(Function),
  };
  const player = Player('John Doe');
  expect(player).toEqual(expected);
});

test('Attack returns something if it was successful', () => {
  const player = Player('John Doe');
  const enemy = Player('Amy Row');
  const enemyBoard = enemy.getBoard();
  enemyBoard.placeShip(3, 4, 5);
  expect(player.attack(enemyBoard, 4, 6)).not.toBeUndefined();
});

test('Attack returns undefined it hits nothing', () => {
  const player = Player('John Doe');
  const enemy = Player('Amy Row');
  const enemyBoard = enemy.getBoard();
  enemyBoard.placeShip(3, 4, 5);
  expect(player.attack(enemyBoard, 7, 8)).toBeUndefined();
});

test('AI player attacks successfully', () => {
  const robot = Player('Mr. ROBOT', true);
  const enemy = Player('Amy Row');
  const enemyBoard = enemy.getBoard();
  enemyBoard.placeShip(3, 4, 5);
  expect(robot.attack(enemyBoard)).not.toBeUndefined();
});

test("AI doesn't get stuck if there are no spots to attack", () => {
  const robot = Player('Mr. ROBOT', true);
  const enemy = Player('Amy Row');
  const enemyBoard = enemy.getBoard();
  expect(robot.attack(enemyBoard)).toBeUndefined();
});
