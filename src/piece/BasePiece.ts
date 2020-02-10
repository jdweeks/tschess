import Piece from './Piece';

export default abstract class BasePiece implements Piece {
  totem: string = '-';
  light: boolean = false;
}