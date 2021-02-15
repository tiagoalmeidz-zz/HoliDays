import { Module } from '@nestjs/common';
import { HolidaysModule } from './holidays/holidays.module';
import { typeOrmConfig } from './config/typeorm.config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), HolidaysModule],
})
export class AppModule {}
