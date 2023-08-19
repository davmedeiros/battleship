import Game from './game';

const game = Game('Admiral');
const boardViews = document.querySelectorAll('.board');

// MOCK: Make some mock plays for testing purposes
const mockPlays = () => {
  game.player.getGameBoard().placeShip(3, 3, 7);
  game.player.getGameBoard().placeShip(2, 0, 0, true);
  game.player.getGameBoard().placeShip(3, 10, 4);
  game.enemy.getGameBoard().placeShip(3, 7, 3, true);
  game.enemy.getGameBoard().placeShip(2, 2, 2);
};

mockPlays();

const createBoards = () => {
  const playerBoard = game.player.getGameBoard().getBoard();
  const enemyBoard = game.enemy.getGameBoard().getBoard();
  const boards = [playerBoard, enemyBoard];
  let index = 0;

  boardViews.forEach((boardView) => {
    boards[index].forEach((rows) => {
      rows.forEach((spot) => {
        const spotView = document.createElement('div');
        spotView.classList.add('spot');
        spotView.textContent = spot;
        boardView.appendChild(spotView);
      });
    });
    index += 1;
  });
};

export default createBoards;
