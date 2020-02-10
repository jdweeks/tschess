import Position from '../position/Position';

export default interface Board {
  positions: Position[];
  positionMap: any;

  print(): void;
  reset(): void;
  move(from: number, to: number): boolean;
}