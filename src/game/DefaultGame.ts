import Game  from './Game';
import Board from '../board/Board'
import Player from '../player/Player';

export default class DefaultGame implements Game {
  board: Board;
  player1: Player;
  player2: Player;

  constructor(board: Board, player1: Player, player2: Player) {
    this.board = board;
    this.player1 = player1;
    this.player2 = player2;
  }
}