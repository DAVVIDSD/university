import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {UniversidadDataSource} from '../datasources';
import {Documento, DocumentoRelations} from '../models';

export class DocumentoRepository extends DefaultCrudRepository<
  Documento,
  typeof Documento.prototype.id,
  DocumentoRelations
> {
  constructor(
    @inject('datasources.universidad') dataSource: UniversidadDataSource,
  ) {
    super(Documento, dataSource);
  }
}
