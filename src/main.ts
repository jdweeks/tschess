import Board  from '../src/board/Board';
import Player from '../src/player/Player';
import Game   from '../src/game/Game';

import DefaultBoard from '../src/board/DefaultBoard';
import HumanPlayer  from '../src/player/HumanPlayer';
import DefaultGame  from '../src/game/DefaultGame';

const main = () => {
  const board: Board = new DefaultBoard();
  const player1: Player = new HumanPlayer();
  const player2: Player = new HumanPlayer();

  const game: Game = new DefaultGame(board, player1, player2);
};

main();