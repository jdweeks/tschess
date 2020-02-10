import Player from '../player/Player';
import Board  from '../board/Board';
import { Side } from '../game/Side';

export default interface Game {
  side: Side;
  board: Board;
  player1: Player;
  player2: Player;

  playTurn(): void;
  switchSide(): void;
}