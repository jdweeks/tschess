import Player from '../player/Player';
import Board  from '../board/Board';

export default interface Game {
  board: Board;
  player1: Player;
  player2: Player;

  loop(): void;
}