import Game from './game';

const game = Game('Admiral');
const boardViews = document.querySelectorAll('.board');

const createBoards = () => {
  const boards = [game.player.getGameBoard().getBoard()];
  boardViews.forEach((boardView) => {});
};
