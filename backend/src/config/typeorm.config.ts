import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'tiago',
  password: 'Tigas@93',
  database: 'holidays',
  entities: [__dirname + '/../**/*.entity.js'],
  synchronize: true,
};
