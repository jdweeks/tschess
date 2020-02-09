import Game   from './Game';
import Player from '../player/Player';
import Board  from '../board/Board';

export default class DefaultGame implements Game {
  board: Board;
  player1: Player;
  player2: Player;

  constructor(board: Board, player1: Player, player2: Player) {
    this.board = board;
    this.player1 = player1;
    this.player2 = player2;
  }

  loop() {
    this.board.print();
  }
}