import { Column } from "../column/Column";

export default interface Position {
  row: number;
  col: Column;

  print(): void;
}