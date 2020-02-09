import Board from './Board';
import Position from '../position/Position';
import DefaultPosition from '../position/DefaultPosition';
import { Column } from '../column/Column';

export default class DefaultBoard implements Board {
  positions: Position[];

  constructor() {
    this.positions = [];
    this.init();
  }

  private init() {
    let range = [1, 2, 3, 4, 5, 6, 7, 8];
    for (let row of range) {
      for (let col of range) {
        let pos: Position = new DefaultPosition(row, col);
        this.positions.push(pos);
      }
    }
  }

  print() {
    let count: number = 0;

    console.log('');
    for (let pos of this.positions) {
      pos.print();
      count++;
      if (count % 8 == 0) {
        process.stdout.write(pos.row.toString() + ' ');
        console.log('');
      }
    }

    for (let col in Column) {
      if (isNaN(Number(col))) {
        process.stdout.write(col + ' ');
      }
    }
    console.log('\n');
  }

  reset() {
    while (this.positions.length) {
      this.positions.pop();
    }
    this.init();
  }

  move(from: Position, to: Position): boolean {
    // stub
    return false;
  }
}