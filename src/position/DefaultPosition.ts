import Position from './Position';
import { Column } from "./Column";
import Piece from '../piece/Piece';

export default class DefaultPosition implements Position {
  row: number;
  col: Column;
  piece: Piece;

  constructor(row: number, col: Column, piece: Piece) {
    this.row = row;
    this.col = col;
    this.piece = piece;
  }

  print() {
    process.stdout.write(this.piece.totem + ' ');
  }
}