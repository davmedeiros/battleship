import Game from './game';

const game = Game('Admiral');
const boardViews = document.querySelectorAll('.board');
const message = document.querySelector('#message');

// MOCK: Make some mock plays for testing purposes
const mockPlays = () => {
  game.player.getGameBoard().placeShip(3, 3, 7);
  game.player.getGameBoard().placeShip(2, 0, 0, true);
  game.player.getGameBoard().placeShip(3, 9, 4);
  game.player.getGameBoard().placeShip(2, 5, 4);
  game.enemy.getGameBoard().placeShip(3, 7, 3, true);
  game.enemy.getGameBoard().placeShip(2, 2, 2);
  game.enemy.getGameBoard().placeShip(3, 0, 6, true);
  game.enemy.getGameBoard().placeShip(2, 4, 7);
  game.player.attack(game.enemy.getGameBoard(), 4, 3);
  game.enemy.attack(game.player.getGameBoard());
};

mockPlays();
//-----------------------------------------------

const clearContainer = (container) => {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
};

const aiAttack = () => game.enemy.attack(game.player.getGameBoard());

const attack = (coordinatesY, coordinatesX) => {
  const result = game.player.attack(
    game.enemy.getGameBoard(),
    coordinatesY,
    coordinatesX
  );

  if (result) {
    if (result.isSunk()) {
      if (game.enemy.getGameBoard().hasAllSunk()) {
        message.textContent = 'Congratulations. You sunk all ships!';
      } else {
        message.textContent = 'You sunk a ship!';
      }
    } else {
      message.textContent = 'The shot hit a ship!';
    }
  } else {
    message.textContent = 'Missed!';
  }
};

const renderBoards = () => {
  const playerBoard = game.player.getGameBoard().getBoard();
  const enemyBoard = game.enemy.getGameBoard().getBoard();
  const boards = [playerBoard, enemyBoard];
  let index = 0;

  boardViews.forEach((boardView) => {
    clearContainer(boardView);
    boards[index].forEach((rows, coordinatesY) => {
      rows.forEach((spot, coordinatesX) => {
        const spotView = document.createElement('div');
        spotView.classList.add('spot');

        if (spot === 'shot') {
          spotView.classList.add('shot');
        } else if (spot) {
          spotView.classList.add('ship');
        } else {
          spotView.classList.add('free');
        }

        spotView.textContent = `${coordinatesY}/${coordinatesX}`;
        spotView.dataset.coordinatesY = coordinatesY;
        spotView.dataset.coordinatesX = coordinatesX;

        spotView.addEventListener('click', () => {
          attack(coordinatesY, coordinatesX);
          aiAttack();
          renderBoards();
        });

        boardView.appendChild(spotView);
      });
    });
    index += 1;
  });
};

export default renderBoards;
