import Position from '../position/Position';

export default interface Board {
  print(): void,
  reset(): void,
  move(from: Position, to: Position): boolean
}