import { Column } from "./Column";
import Piece from "../piece/Piece";

export default interface Position {
  row: number;
  col: Column;
  piece: Piece;

  print(): void;
}