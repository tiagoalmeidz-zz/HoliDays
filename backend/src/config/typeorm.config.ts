import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'tiago',
  password: '', //process.env.DATABASE_PASSWORD,
  database: 'holidays',
  entities: [__dirname + '/../**/*.entity.json'],
  synchronize: true,
};
