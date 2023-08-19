import Game from './game';

const game = Game('Admiral');
const boardViews = document.querySelectorAll('.board');
const message = document.querySelector('#message');
const toggleVertical = document.querySelector('#toggle-vertical');
const playerShipsToPlace = [2, 3, 3, 4, 5];
const enemyShipsToPlace = [2, 3, 3, 4, 5];
let isToggledVertical = false;

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
          let playerHasPlaced = true;

          setTimeout(() => {
            if (playerShipsToPlace.length <= 0) {
              hasWon = attack(
                game.player,
                game.enemy,
                coordinatesY,
                coordinatesX
              );
            } else {
              const popped = playerShipsToPlace.pop();
              const result = placeShip(
                game.player,
                popped,
                coordinatesY,
                coordinatesX,
                isToggledVertical
              );

              if (result) {
                message.textContent = `${game.player.name} placed a ${result.name}`;
              } else {
                playerShipsToPlace.push(popped);
                playerHasPlaced = false;
                message.textContent = `${game.player.name} ship was sent out of bounds. Try again.`;
                boardView.classList.toggle('locked');
              }
            }
            renderBoards();
          }, 3000);

          setTimeout(() => {
            if (playerHasPlaced) {
              if (!hasWon) {
                message.textContent = `${game.enemy.name} is aiming...`;

                setTimeout(() => {
                  if (enemyShipsToPlace.length <= 0) {
                    attack(game.enemy, game.player);
                  } else {
                    let result;
                    do {
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
                        message.textContent = `${game.enemy.name} placed a ${result.name}`;
                      }
                    } while (!result);
                  }
                  renderBoards();
                  boardView.classList.toggle('locked');
                }, 3000);
              }
            }
          }, 5000);
        });

        boardView.appendChild(spotView);
      });
    });
    index += 1;
  });
};

toggleVertical.addEventListener('click', () => {
  isToggledVertical = !isToggledVertical;
  toggleVertical.classList.toggle('enabled');
});

export default renderBoards;
