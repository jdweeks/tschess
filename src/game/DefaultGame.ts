import Game   from './Game';
import Player from '../player/Player';
import Board  from '../board/Board';
import Piece from '../piece/Piece';
import Pawn from '../piece/Pawn';
import { Side } from '../game/Side';

import * as readline from 'readline';

export default class DefaultGame implements Game {
  side: Side;
  board: Board;
  player1: Player;
  player2: Player;

  private reader: readline.ReadLine;

  constructor(board: Board, player1: Player, player2: Player) {
    this.side = Side.LIGHT;
    this.board = board;
    this.player1 = player1;
    this.player2 = player2;

    this.reader = readline.createInterface({ input:  process.stdin, output: process.stdout });
  }

  private parseAlgebraic(move: string) : number[] {
    let fromTo: number[] = [];
    let len = move.length;

    switch (len) {
      case 2:
        let index: number = this.board.positionMap[move];
        let oneBack: number = this.side ? index-8 : index+8;
        let twoBack: number = this.side ? index-16 : index+16;

        let piece: Piece = this.board.positions[oneBack].piece;
        if (piece instanceof Pawn) {
          fromTo.push(oneBack);
        }
        else {
          fromTo.push(twoBack);
        }

        fromTo.push(index);
        return fromTo;
      case 3:
      case 4:
      case 5:
      default:
        console.log('Move is not valid');
    }

    return fromTo;
  }

  playTurn() {
    this.board.print();
    this.reader.question('Enter move: ', (move) => {
      let fromTo: number[] = this.parseAlgebraic(move);
      let valid:  boolean = this.board.move(fromTo[0], fromTo[1]);

      if (!valid) {
        console.log('Move is not valid');
      }
      else {
        this.switchSide();
        this.playTurn();
      }
    });
  }

  switchSide() {
    if (this.side) {
      this.side = Side.LIGHT;
    }
    else {
      this.side = Side.DARK;
    }
  }
}