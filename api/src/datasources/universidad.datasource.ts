import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'universidad',
  connector: 'mongodb',
  url: '',
  host: 'localhost',
  port: 27017,
  user: '',
  password: '',
  database: 'universidad',
  useNewUrlParser: true
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class UniversidadDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'universidad';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.universidad', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
