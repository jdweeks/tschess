import Board  from './board/Board';
import Player from './player/Player';
import Game   from './game/Game';

import DefaultBoard from './board/DefaultBoard';
import HumanPlayer  from './player/HumanPlayer';
import DefaultGame  from './game/DefaultGame';

const main = () => {
  const board: Board = new DefaultBoard();
  const player1: Player = new HumanPlayer();
  const player2: Player = new HumanPlayer();

  const game: Game = new DefaultGame(board, player1, player2);
};

main();