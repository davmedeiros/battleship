import GameBoard from './game-board';

const Player = (name, isAI = false) => {
  const board = GameBoard();
  // AI variables
  let lastHitCoordinatesY = -1;
  let lastHitCoordinatesX = -1;
  let isHittingVertical = false;
  let isHittingHorizontal = false;

  const aiAttack = (enemyBoard) => {
    let result;
    let coordinatesY;
    let coordinatesX;
    let target = 'shot';

    while (target === 'shot' && !enemyBoard.hasAllSunk()) {
      if (lastHitCoordinatesY === -1 && lastHitCoordinatesX === -1) {
        coordinatesY = Math.floor(Math.random() * 10);
        coordinatesX = Math.floor(Math.random() * 10);
        target = enemyBoard.getBoard()[coordinatesY][coordinatesX];
      } else {
        if (isHittingHorizontal) {
          coordinatesX =
            lastHitCoordinatesX + (Math.floor(Math.random() * 2) ? 1 : -1);
          coordinatesY = lastHitCoordinatesY;
        } else if (isHittingVertical) {
          coordinatesY =
            lastHitCoordinatesY + (Math.floor(Math.random() * 2) ? 1 : -1);
          coordinatesX = lastHitCoordinatesX;
        } else {
          coordinatesY =
            lastHitCoordinatesY + Math.floor(Math.random() * (2 - -1) + -1);
          coordinatesX =
            lastHitCoordinatesX + Math.floor(Math.random() * (2 - -1) + -1);
        }
        target = enemyBoard.getBoard()[coordinatesY][coordinatesX];
      }
    }

    if (!enemyBoard.hasAllSunk()) {
      result = enemyBoard.receiveAttack(coordinatesY, coordinatesX);

      if (result) {
        if (result.isSunk()) {
          [lastHitCoordinatesY, lastHitCoordinatesX] = [-1, -1];
          isHittingVertical = false;
          isHittingHorizontal = false;
        } else {
          if (lastHitCoordinatesY === coordinatesY) {
            isHittingHorizontal = true;
          } else if (lastHitCoordinatesX === coordinatesX) {
            isHittingVertical = true;
          }

          [lastHitCoordinatesY, lastHitCoordinatesX] = [
            coordinatesY,
            coordinatesX,
          ];
        }
      }
    }

    return result;
  };

  const attack = (enemyBoard, coordinatesY, coordinatesX) => {
    let result;

    if (isAI) {
      result = aiAttack(enemyBoard);
    } else {
      result = enemyBoard.receiveAttack(coordinatesY, coordinatesX);
    }

    return result;
  };

  const getGameBoard = () => board;

  return { name, isAI, attack, getGameBoard };
};

export default Player;
