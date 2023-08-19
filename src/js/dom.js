import Game from './game';

const game = Game('Admiral');
const boardViews = document.querySelectorAll('.board');
const message = document.querySelector('#message');
const playerShipsToPlace = [2, 3, 3, 4, 5];
const enemyShipsToPlace = [2, 3, 3, 4, 5];

// MOCK: Make some mock plays for testing purposes
// const mockPlays = () => {
//   game.player.getGameBoard().placeShip(3, 3, 7);
//   game.player.getGameBoard().placeShip(2, 0, 0, true);
//   game.player.getGameBoard().placeShip(3, 9, 4);
//   game.player.getGameBoard().placeShip(2, 5, 4);
//   game.enemy.getGameBoard().placeShip(3, 7, 3, true);
//   game.enemy.getGameBoard().placeShip(2, 2, 2);
//   game.enemy.getGameBoard().placeShip(3, 0, 6, true);
//   game.enemy.getGameBoard().placeShip(2, 4, 7);
//   game.player.attack(game.enemy.getGameBoard(), 4, 3);
//   game.enemy.attack(game.player.getGameBoard());
// };

// mockPlays();
//-----------------------------------------------

const clearContainer = (container) => {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
};

const endGame = () => {
  boardViews.forEach((boardView) => {
    boardView.classList.add('locked');
  });
};

const placeShip = (placer, length, coordinatesY, coordinatesX, isVertical) =>
  placer
    .getGameBoard()
    .placeShip(length, coordinatesY, coordinatesX, isVertical);

const attack = (attacker, target, coordinatesY, coordinatesX) => {
  let hasWon = false;
  const result = attacker.attack(
    target.getGameBoard(),
    coordinatesY,
    coordinatesX
  );

  if (result) {
    if (result.isSunk()) {
      if (target.getGameBoard().hasAllSunk()) {
        message.textContent = `${attacker.name} sunk all ships!`;
        endGame();
        hasWon = true;
      } else {
        message.textContent = `${attacker.name} sunk a ship!`;
      }
    } else {
      message.textContent = `${attacker.name} hit a ship!`;
    }
  } else {
    message.textContent = `${attacker.name} missed!`;
  }

  return hasWon;
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
          message.textContent = `${game.player.name} is aiming...`;
          boardView.classList.toggle('locked');

          let hasWon = false;

          setTimeout(() => {
            if (playerShipsToPlace.length <= 0) {
              hasWon = attack(
                game.player,
                game.enemy,
                coordinatesY,
                coordinatesX
              );
            } else {
              placeShip(
                game.player,
                playerShipsToPlace.pop(),
                coordinatesY,
                coordinatesX
              );
            }
            renderBoards();
          }, 3000);

          setTimeout(() => {
            if (!hasWon) {
              message.textContent = `${game.enemy.name} is aiming...`;

              setTimeout(() => {
                if (enemyShipsToPlace.length <= 0) {
                  attack(game.enemy, game.player);
                } else {
                  let result;
                  do {
                    console.log('trying to place');
                    const popped = enemyShipsToPlace.pop();
                    result = placeShip(
                      game.enemy,
                      popped,
                      Math.floor(Math.random() * 10),
                      Math.floor(Math.random() * 10),
                      Math.floor(Math.random() * 2) === 0
                    );

                    if (!result) {
                      enemyShipsToPlace.push(popped);
                    } else {
                      message.textContent = `${popped}`;
                    }
                  } while (!result);
                }
                renderBoards();
                boardView.classList.toggle('locked');
              }, 3000);
            }
          }, 5000);
        });

        boardView.appendChild(spotView);
      });
    });
    index += 1;
  });
};

export default renderBoards;
