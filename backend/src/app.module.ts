import { Module } from '@nestjs/common';
import { HolidaysModule } from './holidays/holidays.module';

@Module({
  imports: [HolidaysModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
