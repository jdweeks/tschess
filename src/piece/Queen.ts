import BasePiece from './BasePiece';

export default class Queen extends BasePiece {
  readonly totem: string;
  readonly light: boolean;

  constructor(light: boolean) {
    super();

    this.light = light;
    this.totem = this.light ? 'Q' : 'q';
  }
}