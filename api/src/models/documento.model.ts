import {Entity, model, property} from '@loopback/repository';

@model()
export class Documento extends Entity {
  @property({
    type: 'string',
    required: true,
  })
  titulo: string;

  @property({
    type: 'string',
    required: true,
  })
  descripcion: string;

  @property({
    type: 'string',
    required: true,
  })
  cuerpo: string;

  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;


  constructor(data?: Partial<Documento>) {
    super(data);
  }
}

export interface DocumentoRelations {
  // describe navigational properties here
}

export type DocumentoWithRelations = Documento & DocumentoRelations;
