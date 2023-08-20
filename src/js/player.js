import GameBoard from './game-board';

const Player = (name, isAI = false) => {
  const board = GameBoard();
  // AI variables
  let originalHitCoordinatesY = -1;
  let originalHitCoordinatesX = -1;
  let lastHitCoordinatesY = -1;
  let lastHitCoordinatesX = -1;
  let isHittingVertical = false;
  let isHittingHorizontal = false;
  let shotsLandedOnCurrent = 0;
  let hasHitLastTime = false;

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
          if (!hasHitLastTime && (!target || target === 'shot')) {
            coordinatesX =
              originalHitCoordinatesX +
              (Math.floor(Math.random() * 2) ? 1 : -1);
          } else {
            coordinatesX =
              lastHitCoordinatesX + (Math.floor(Math.random() * 2) ? 1 : -1);
          }

          coordinatesY = lastHitCoordinatesY;
        } else if (isHittingVertical) {
          if (!hasHitLastTime && (!target || target === 'shot')) {
            coordinatesY =
              originalHitCoordinatesY +
              (Math.floor(Math.random() * 2) ? 1 : -1);
          } else {
            coordinatesY =
              lastHitCoordinatesY + (Math.floor(Math.random() * 2) ? 1 : -1);
          }

          coordinatesX = lastHitCoordinatesX;
        } else {
          let offset = Math.floor(Math.random() * (2 - -1) + -1);
          coordinatesY = lastHitCoordinatesY + offset;

          if (offset) {
            offset = 0;
          } else {
            offset = Math.floor(Math.random() * (2 - -1) + -1);
          }

          coordinatesX = lastHitCoordinatesX + offset;
        }

        if (coordinatesY > 9) {
          coordinatesY = 9;
        }

        if (coordinatesY < 0) {
          coordinatesY = 0;
        }

        if (coordinatesX > 9) {
          coordinatesX = 9;
        }

        if (coordinatesX < 0) {
          coordinatesX = 0;
        }

        target = enemyBoard.getBoard()[coordinatesY][coordinatesX];
      }
    }

    if (!enemyBoard.hasAllSunk()) {
      result = enemyBoard.receiveAttack(coordinatesY, coordinatesX);

      if (result && result !== 'shot') {
        if (shotsLandedOnCurrent === 0) {
          originalHitCoordinatesY = coordinatesY;
          originalHitCoordinatesX = coordinatesX;
        }

        hasHitLastTime = true;
        shotsLandedOnCurrent += 1;

        if (result.isSunk()) {
          [lastHitCoordinatesY, lastHitCoordinatesX] = [-1, -1];
          isHittingVertical = false;
          isHittingHorizontal = false;
          shotsLandedOnCurrent = 0;
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
      } else {
        hasHitLastTime = false;
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
