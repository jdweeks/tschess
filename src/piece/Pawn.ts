import BasePiece from './BasePiece';

export default class Pawn extends BasePiece {
  readonly totem: string;
  readonly light: boolean;

  constructor(light: boolean) {
    super();

    this.light = light;
    this.totem = this.light ? 'P' : 'p';
  }
}