import Game from './game';

const game = Game('Admiral');
const boardViews = document.querySelectorAll('.board');

const createBoards = () => {
  const columns = game.player.getGameBoard().getBoard();
  console.table(columns);
  columns.forEach((rows) => {
    rows.forEach((spot) => {
      const spotView = document.createElement('div');
      spotView.classList.add('spot');
      boardViews[0].appendChild(spotView);
    });
  });
};

export default createBoards;
