import Position from './Position';
import { Column } from "../column/Column";

export default class DefaultPosition implements Position {
  row: number;
  col: Column;
  totem: string;

  constructor(row: number, col: Column) {
    this.row = row;
    this.col = col;
    this.totem = '-';
  }

  print() {
    process.stdout.write(this.totem + ' ');
  }
}