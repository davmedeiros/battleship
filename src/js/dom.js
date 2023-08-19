import Game from './game';

const game = Game('Admiral');
const boardViews = document.querySelectorAll('.board');

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
        boardView.appendChild(spotView);
      });
    });
    index += 1;
  });
};

export default createBoards;
