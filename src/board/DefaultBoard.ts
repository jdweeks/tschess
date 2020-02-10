import Board from './Board';
import Position from '../position/Position';
import DefaultPosition from '../position/DefaultPosition';
import { Column } from '../position/Column';
import Empty from '../piece/Empty';
import Pawn from '../piece/Pawn';
import Rook from '../piece/Rook';
import Knight from '../piece/Knight';
import Bishop from '../piece/Bishop';
import King from '../piece/King';
import Queen from '../piece/Queen';

export default class DefaultBoard implements Board {
  positions: Position[];

  constructor() {
    this.positions = [];
    this.init();
  }

  private init() {
    let range = [1, 2, 3, 4, 5, 6, 7, 8];

    this.positions.push(new DefaultPosition(8, Column.a, new Rook(false)));
    this.positions.push(new DefaultPosition(8, Column.b, new Knight(false)));
    this.positions.push(new DefaultPosition(8, Column.c, new Bishop(false)));
    this.positions.push(new DefaultPosition(8, Column.d, new Queen(false)));
    this.positions.push(new DefaultPosition(8, Column.d, new King(false)));
    this.positions.push(new DefaultPosition(8, Column.c, new Bishop(false)));
    this.positions.push(new DefaultPosition(8, Column.b, new Knight(false)));
    this.positions.push(new DefaultPosition(8, Column.a, new Rook(false)));

    for (let col of range) {
      this.positions.push(new DefaultPosition(7, col, new Pawn(false)));
    }

    for (let row of range.slice(2,6).reverse()) {
      for (let col of range) {
        this.positions.push(new DefaultPosition(row, col, new Empty()));
      }
    }

    for (let col of range) {
      this.positions.push(new DefaultPosition(2, col, new Pawn(true)));
    }

    this.positions.push(new DefaultPosition(1, Column.a, new Rook(true)));
    this.positions.push(new DefaultPosition(1, Column.b, new Knight(true)));
    this.positions.push(new DefaultPosition(1, Column.c, new Bishop(true)));
    this.positions.push(new DefaultPosition(1, Column.d, new Queen(true)));
    this.positions.push(new DefaultPosition(1, Column.d, new King(true)));
    this.positions.push(new DefaultPosition(1, Column.c, new Bishop(true)));
    this.positions.push(new DefaultPosition(1, Column.b, new Knight(true)));
    this.positions.push(new DefaultPosition(1, Column.a, new Rook(true)));
  }

  print() {
    let count: number = 0;

    console.log('');
    for (let col in Column) {
      if (isNaN(Number(col))) {
        process.stdout.write(col + ' ');
      }
    }

    console.log('\n');
    for (let pos of this.positions) {
      pos.print();
      count++;
      if (count % 8 == 0) {
        process.stdout.write(' ' + pos.row.toString() + ' ');
        console.log('');
      }
    }

    console.log('');
  }

  reset() {
    while (this.positions.length) {
      this.positions.pop();
    }
    this.init();
  }

  private validMove(from: number, to: number): boolean {
    // stub
    return true;
  }

  move(from: number, to: number): boolean {
    let valid: boolean = this.validMove(from, to);

    if (valid) {
      // do the move
      this.positions[to].piece = this.positions[from].piece;
      this.positions[from].piece = new Empty();
    }

    return valid;
  }

  get positionMap() {
    return {
      'a8': 0,  'b8': 1,  'c8': 2,  'd8': 3,  'e8': 4,  'f8': 5,  'g8': 6,  'h8': 7,
      'a7': 8,  'b7': 9,  'c7': 10, 'd7': 11, 'e7': 12, 'f7': 13, 'g7': 14, 'h7': 15,
      'a6': 16, 'b6': 17, 'c6': 18, 'd6': 19, 'e6': 20, 'f6': 21, 'g6': 22, 'h6': 23,
      'a5': 24, 'b5': 25, 'c5': 26, 'd5': 27, 'e5': 28, 'f5': 29, 'g5': 30, 'h5': 31,
      'a4': 32, 'b4': 33, 'c4': 34, 'd4': 35, 'e4': 36, 'f4': 37, 'g4': 38, 'h4': 39,
      'a3': 40, 'b3': 41, 'c3': 42, 'd3': 43, 'e3': 44, 'f3': 45, 'g3': 46, 'h3': 47,
      'a2': 48, 'b2': 49, 'c2': 50, 'd2': 51, 'e2': 52, 'f2': 53, 'g2': 54, 'h2': 55,
      'a1': 56, 'b1': 57, 'c1': 58, 'd1': 59, 'e1': 60, 'f1': 61, 'g1': 62, 'h1': 63
    }
  }
}