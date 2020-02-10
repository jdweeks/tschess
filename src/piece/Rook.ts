import BasePiece from './BasePiece';

export default class Rook extends BasePiece {
  readonly totem: string;
  readonly light: boolean;

  constructor(light: boolean) {
    super();

    this.light = light;
    this.totem = this.light ? 'R' : 'r';
  }
}